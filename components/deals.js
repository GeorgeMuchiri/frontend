import { gql, useQuery } from '@apollo/client'
import styles from '../styles/Deals.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react'
import { cartcontext } from '../pages/api/cartcontext'

const ProdList  = gql`
{
    allProducts{
      id
      name
      price
      description
      image
      }
    }
`



function Deals() {

    const {loading, error, data}  = useQuery(ProdList)
    if (loading) return <h4>Loading</h4>

    if(error) return <h4>{error}</h4>

   
    const {cart, setCart} = useContext(cartcontext)

    const handleadd = ()=>{
        setCart([...cart, data])
    }
   
    return (
        <div className={styles.prod_container}>
            <div className={styles.prod_titles}>
            <h4>Deals of the Day</h4>
            <Link href="#" className={styles.prod_link}>See All</Link>
            </div>
            <div className={styles.card_sideways}> 
                   {data.allProducts.slice(0,4).map((prod)=><div>
                    <Link key={prod.id} href={{pathname: "products/[id]", query: {
            id: prod.id
        }}
        }><div key={prod.id} className={styles.prod_card}>
                       
                       <Image width='100%' height='250px'src={prod.image} alt=""></Image>
                       <p className={styles.prod_name}>{prod.name}</p>
                       <p className={styles.prod_rating}>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                       <p className={styles.prod_price}>KES {prod.price}</p>
                    
                       
                       
                   </div></Link>
                   <button className={styles.prod_card_button} onClick={handleadd}>Add to cart</button>
                   </div>)} 
                   
            </div>
        </div>
    )
}

export default Deals;
