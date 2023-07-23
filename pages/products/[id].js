import Header from '../../components/header'
import Footer from '../../components/footer'
import { gql, HttpLink, InMemoryCache, ApolloClient, useQuery} from '@apollo/client'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import { cartcontext } from '../api/cartcontext'


const product_data = gql`
query($id: ID!){
    productDetails(id: $id){
      id
      name
      price
      description
      image
    }
  }
`


export default function ProductDetails({data}){


    const {cart, setCart} = useContext(cartcontext)

    const handleadd = ()=>{
        setCart([...cart, data])
    }
    console.log(cart)
    
    return(
        <div>
            <Header />
            <div className={styles.Description_Container}>
        <div className={styles.Desc_Large}>
          <div className={styles.imgDiv}>
          <div className={styles.__img}>
              <Image src={data?.productDetails.image} width='300px' height='300px' objectFit='contain'></Image>
          </div>
          <div className={styles.small_img}>
            <img alt=""></img>
            <img alt=""></img>
            <img alt=""></img>
            <img alt=""></img>
          </div>
          </div>
          <div className={styles.prod_desc}>
              <div className={styles.individual}>
                    <h3>{data.productDetails.name}</h3>
                    <p className={styles.stars}>&#9733;&#9733;&#9733;&#9733;</p>
                    <p className={styles.qty}>QTY: <div className={styles.qty__}> - </div> <div> 1 </div> <div className={styles.qty__opp}> + </div></p>
                    <p>Color: N/A</p>
                    <p>Size: N/A</p>
                    <p className={styles.price}>Price</p>
                    <h3 className={styles.figure}>KES {data.productDetails.price}</h3>
                    <button className={styles.cart_button} onClick={handleadd}>ADD TO CART</button>
              </div>
          </div>
          
        </div>
        <div className={styles.Desc_Small}> </div>
      </div>
      <div className={styles.More}>
    
        <h4>More from this seller</h4>
      </div>
      <div className={styles.Product_Desc}>
          <br />
        <h4 className={styles.description_h4}>Product Description</h4>

        <p className={styles.description}>{data.productDetails.description}</p>
      </div>
      <div className={styles.Product_Desc}>
          <h4> Reviews</h4>
      </div>
      <div className={`${styles.More} ${styles.space}`}>
          <h4> Recommended</h4>
      </div>
            <Footer />

        </div>
    )
}

function createApolloClient(){
    const link = new HttpLink({
        uri: 'http://localhost:8000/graphql/',
        credentials: 'include',
    })

    return new ApolloClient({
        link,
        cache: new InMemoryCache(),
    })
}

export async function getStaticPaths(){
    return{
        paths: [ 
                {params: {id: '1'}},
                
            ],
        fallback: true,
    }
}

export async function getStaticProps({params}){
    const client = createApolloClient()
    const variance = params.id

    const { data } = await client.query({
        query: product_data,
        variables: { id: variance },
    })


    return {
        props:{
            data
        }
    }
}