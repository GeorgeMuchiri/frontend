import Header from "../components/header";
import Footers from "../components/footer"
import Card from "../components/card"
import styles from '../styles/Dashboard.module.css'

import styles1 from '../styles/Account.module.css'
import craft from '../images/hand-craft.png'
import dummy from '../images/dummy2-450x341.png'
//import dash from '../images/dash.svg'
import customers from '../images/customers.svg'
import inventory from '../images/inventory.svg'
import reviews from '../images/reviews.svg'
import logout from '../images/logout.svg'
import image from '../images/image_2.jpg'
import prof from '../images/Dummy.jpg.webp'
import Image from "next/image";
import Link from "next/link";
import { gql, HttpLink, InMemoryCache, ApolloClient, useQuery} from '@apollo/client'
import Router  from "next/router";




function Inventory({data, store}) {
  return (
    <div>
        <Header />
            <div className={styles._dash}>
              <div className={styles.Left_Dash}>
                  <div className={styles.Left_Profile}>
                      <img src={craft} alt=''></img>
                      <h5>{store.data.storeDetails.name}</h5>
                  </div>
                  <div className={styles1.Acc_Side}>
                      <img src=''  className='' alt=''></img>
                      <p className={styles1.Acc_Label}>Dashboard</p>
                  </div>
                  <div className={styles1.Acc_Side}>
                  <Image src={inventory} width='20px' height='20px' objectFit='contain'></Image>
                      <Link href='/inventory'><p className={styles1.Acc_Label}>Inventory</p></Link>
                  </div><div className={styles1.Acc_Side}>
                  <Image src={customers} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles1.Acc_Label}>Customers</p>
                  </div><div className={styles1.Acc_Side}>
                  <Image src={reviews} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles1.Acc_Label}>Reviews</p>
                  </div>
                  <div className={styles1.Acc_Side}>
                  <Image src={reviews} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles1.Acc_Label}>Orders</p>
                  </div>
                  <div className={styles.Log_out}>
                  <Image src={logout} width='20px' height='20px' objectFit='contain'></Image>
                    <p>Log Out</p>
                  </div>
              </div>
              
              <div className={styles.Right_Dash}>
              <button onClick={()=> Router.push('/add-inventory')} className={styles.addProd}>Add Products</button>
                  <div className={styles.Welcome_Left}>
                    
                        {data.allProduct.map(d => <div key={d.id} className={styles.containercard}>
                          <div className={styles.card}>
                          <Image src={dummy} width="150px" height="100px" objectFit='contain'></Image>
                          <div className={styles.itemname}>{d.name.slice(0, 15)}...</div>
                          <div className={styles.itemprice}>{d.price}</div>
                          </div>
                          </div>)}
                          
                    </div>
                    
            </div>
            
    </div>
    <Footers />
    </div>
  )
}

const store_products = gql`
query($id: ID!){
 	
    storeProducts(owner: $id){
      id
      name
      description
      price
    }
  }
`
const user_details = gql`
query{
  userDetails{
    id
    username
    email
	phone
    firstname
    lastname
    address
  }
}
`
const storedetails = gql `
query($id: ID!){
    storeDetails(id: $id){
      name
      id
    }
  }

`

const all_products  = gql`
query{
  allProduct{
    name
    price
    description
  }
}
`

export default Inventory

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

export async function getStaticProps(){
    const client = createApolloClient()
    
    const {data} = await client.query({
        query: all_products
        // variables: { id: 2},
    })

    const store = await client.query({
        query: storedetails,
        variables: {id: 1}
    })
    
    // const allproducts = await client.query({
    //     query: user_details
    // })
    const store_info = store.data.storeDetails.id
    console.log(store_info)

    return{
        props: {
            data,
            store
        }
    }
}