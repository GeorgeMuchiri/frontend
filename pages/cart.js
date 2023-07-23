import React, {useContext, useState}from 'react'
import { cartcontext } from './api/cartcontext'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Cart.module.css'
import Link from 'next/link'
import Image from 'next/image'


function cart() {

    const [quantity, setQuantity] = useState(1)
    const {cart} = useContext(cartcontext)

    const total = cart.map((item) => {})
    
  return (
    <div>
            <Header />
            <div className={styles.Main_Cont}>
            <div className={styles.Left_side}>
                <div className={styles.cont_shop}>
                    <Link className={styles.cont_shop_link} href="/">Continue Shopping ></Link>
                </div>
                <div>
                    <div className={styles.cart_title}>
                            <h6>PRODUCT</h6>
                            <h6>PRICE</h6>
                            <h6>QUANTITY</h6>
                            <h6>TOTAL</h6>
                    </div>
                    {cart.map((item)=> (<div key={item.productDetails.id}className={styles.cart_prod}>
                            <Image src={item.productDetails.image} alt='' width='50px' height='50px' objectFit='contain'></Image>
                            <p>KES {item.productDetails.price}</p>
                           <p> <span className={styles.span__} onClick={()=> {
                            if(quantity < 1) return 1;
                            setQuantity(quantity-1)
                            }}> - </span> {quantity} <span className={styles.span_} onClick={()=> setQuantity(quantity+1)}>+</span></p>
                            <p>KES {item.productDetails.price * quantity}</p>
                    </div>))}
                    
                </div>
            </div>
            <div className={styles.Right_side}>
                 
            <img className='upperRibbon' src='' alt=''></img>
            <h3>Cart Total:</h3>
            <h2> </h2>
            <button>Check Out</button>
            <img className='downRibbon' src='' alt=''></img>
            </div>
            </div>
            
            <Footer />
        </div>
  )
}

export default cart