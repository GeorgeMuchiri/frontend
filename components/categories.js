import Image from 'next/image';

import styles from '../styles/Categories.module.css';
import { gql, useQuery } from '@apollo/client'

const categories = gql`
{
    allCategories{
        id
        name
        img
    }
}
`




function Categories() {
    const {loading, error, data } = useQuery(categories)

    
    if (loading) return <h4>Loading ...</h4>
    if(error) return <h4>{error}</h4>
    return (
        <div className={styles.Categories}>
            <h4>Browse by Categories</h4>
            <div className={styles.Category}>
                {data.allCategories.map((cat)=><div key ={cat.id} className={styles.Cat_Card}>
                    <div className={styles.Cat_Card_img}><Image width='45px' height='45px' src={cat.img} alt=""></Image></div>
                    <p>{cat.name}</p>
                    </div>)}
            </div> 
        </div>
    )
}

export default Categories;
