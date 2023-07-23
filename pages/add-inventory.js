import Header from "../components/header";
import Footers from "../components/footer"
import Card from "../components/card"
import styles from '../styles/Dashboard.module.css'

import styles1 from '../styles/Account.module.css'
import craft from '../images/hand-craft.png'
//import dash from '../images/dash.svg'
import customers from '../images/customers.svg'
import inventory from '../images/inventory.svg'
import reviews from '../images/reviews.svg'
import logout from '../images/logout.svg'
import image from '../images/image_2.jpg'
import prof from '../images/Dummy.jpg.webp'
import Image from "next/image";
import Link from "next/link";
import { gql, HttpLink, InMemoryCache, ApolloClient, useQuery, useMutation} from '@apollo/client'
import { useState } from "react";
import  Router  from "next/router";


const create_product = gql`
    mutation createproduct(
        $name: String!,
        $description: String!,
        $price: String!
    ){
        createProducts(
            name: $name,
            description: $description,
            price: $price
        ){
            name
            price
            description
        }
    }
    
`

function addInventory({data, store}) {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const [addProducts] = useMutation(create_product,{
        variables:{
            name: name,
            description: description,
            price: price,
        },
        onCompleted: ()=> Router.push('/inventory')
    })

    const handleinputs = (e) =>{
        e.preventDefault()
        addProducts()
    }

  return (
    <div>
        <Header />
            <div className={styles._dash}>
              <div className={styles.Left_Dash}>
                  <div className={styles.Left_Profile}>
                      <img src={craft} alt=''></img>
                      <h5>Hand Craft LTD</h5>
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
                  <div className={styles.Welcome_Left}>
                       <div className={styles.additems}>Add to Inventory</div> 
                       <div className={styles.inputarea}>
                      <label className={styles.labels}>Name:</label>  <input value={name} onChange={(e)=> setName(e.target.value)} className={styles.inputsname} type='text' placeholder="Enter the name of product"></input>
                      <label className={styles.labels}>Description:</label>  <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className={styles.inputsdesc} placeholder="Enter the name of product"></textarea>
                      <label className={styles.labels}>Price </label> <input value={price} onChange={(e)=> setPrice(e.target.value)} className={styles.inputsprice}type='text' placeholder="Enter the price of product"></input>
                      <button onClick={handleinputs}>Add Inventory</button>
                      </div>
                </div>
            </div>
        
    </div>
    <Footers />
    </div>
  )
}

export default addInventory