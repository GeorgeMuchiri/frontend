import Image from 'next/image';
import mainstyle from '../styles/Main.module.css'
import { gql, useQuery } from '@apollo/client'
import styles from '../styles/Deals.module.css'
import Link from 'next/link';

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

function Main() {

    const {loading, error, data}  = useQuery(ProdList)
    if (loading) return <h4>Loading</h4>

    if(error) return <h4>{error}</h4>

    const {cart, setCart} = useContext(cartcontext)

    const handleadd = ()=>{
        setCart([...cart, data])
    }
    return (
        <div className={mainstyle.Main_Container}>
            <h4> You May Also Like</h4>
            <div className={mainstyle.Main_Grid}>
            {data.allProducts.slice(0,8).map((prod)=><Link key={prod.id} href={{pathname: "products/[id]", query: {
            id: prod.id
        }}
        }><div key={prod.id} className={styles.prod_card}>
                       
                       <Image width='100%' height='250px'src={prod.image} alt=""></Image>
                       <p className={styles.prod_name}>{prod.name}</p>
                       <p className={styles.prod_rating}>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                       <p className={styles.prod_price}>KES {prod.price}</p>
                    
                       
                       <button>Add to Cart</button>
                   </div></Link>)}  

            </div>
            
            <button>LOAD MORE</button>
        </div>
    )
}

export default Main;
