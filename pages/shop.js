import { gql, useQuery} from '@apollo/client'
import Header from '../components/header'
import dummy from '../images/Dummy.jpg.webp';
import shopbag from'../images/shopping-bag.svg'
import inbox from '../images/inbox.svg'
import heart from '../images/heart.svg'
import medal from '../images/medal.svg'
import coupon from '../images/coupon.svg'
import styles from '../styles/Account.module.css'
import Link from 'next/link';
import Image from 'next/image';
import logout from '../images/logout.svg'

import { useAuthentication } from './api/auth'
import  Router  from 'next/router';


const userdetails = gql`
query{
  userDetails{
    username
    email
	phone
    firstname
    lastname
    address
  }
}
`


function shop() {
    const { data } = useQuery(userdetails)

    const { signOut}  = useAuthentication()

    const handlesignout = ()=> {
        signOut()
        Router.push('/')
    }

    const gotoshop =()=>{
        Router.push('/dashboard')
    }

  return (
    <div>
        <Header />
        <div className={styles.Account_Container}>
            <div className={styles.Account_Left}>
                  <div className={styles.Acc_Profile}>
                  <div className={styles.Acc_Profile_img}><Image src={dummy} width='50px' height='50px' objectFit='contain'></Image></div>
                      <h4>{data?.userDetails.username}</h4>
                  </div>
                  <div className={styles.Acc_Side}>
                  <Image src={shopbag} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles.Acc_Label}>Orders</p>
                  </div>
                  <div className={styles.Acc_Side}>
                  <Image src={inbox} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles.Acc_Label}>Inbox</p>
                  </div><div className={styles.Acc_Side}>
                      <Image src={heart} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles.Acc_Label}>Saved Items</p>
                  </div><div className={styles.Acc_Side}>
                  <Image src={coupon} width='20px' height='20px' objectFit='contain
                  '></Image>
                      <p className={styles.Acc_Label}>Vouchers</p>
                  </div><div className={styles.Acc_Side}>
                      <Image src={medal} width='20px' height='20px' objectFit='contain'></Image>
                      <p className={styles.Acc_Label}>Rewards</p>
                  </div>

                  <button className={`${styles.logout} ${styles.Acc_Side}`} onClick={handlesignout} >
                      <Image src={logout} width="20px" height="20px" objectFit='contain'></Image>
                      <p className={styles.Acc_Label}>Log Out</p>
                  </button>
                
            </div>
            <div className={styles.Account_Overview}>
                  <div className={styles.Acc_Title}>
                      <h4>Start a shop</h4>
                  </div>
                  <div>
                    <div className={styles.account}>
                     <p className={styles.account_name}>Name:</p>
                        <input className={styles.account_input}></input>
                     </div>
                    <div className={styles.shop_description}>
                        <p className={styles.shop_name}> Shop Description: </p>
                        <textarea  className={styles.shop_name_input}></textarea>
                   </div>

                   <button onClick={gotoshop} className={styles.create_shop}>Create Shop</button>
                  </div>
            </div>
        </div>
        
    </div>
  )
}

export default shop