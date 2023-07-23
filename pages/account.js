import React from 'react'
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




function Account() {
    const { data } = useQuery(userdetails)

    const { signOut}  = useAuthentication()

    const handlesignout = ()=> {
        signOut()
        Router.push('/')
    }

    console.log(data)
    return <div>
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
                      <h4>Account Overview</h4>
                  </div>
                  <div className={styles.Acc_Container}>
                      <div className={styles.Acc_Contents}>
                          <div className={styles.Acc_Title}>
                              <h5>Account details</h5>
                          </div>
                          <p className={styles._Name}>{data?.userDetails.firstname} {data?.userDetails.lastname}</p>
                          <p className={styles._Email}>{data?.userDetails.email}</p>
                          <div className={styles._Edit}> <Link href="#">EDIT</Link></div>
                      </div>
                      <div className={styles.Acc_Contents}>
                          <div className={styles.Acc_Title}>
                              <h5>Shopping Address</h5>
                          </div>
                          <p className={styles._Name}>Kasarani</p>
                          <p className={styles._Email}>{data?.userDetails.address}</p>
                          <div className={styles._Edit}><Link href="#" >EDIT</Link></div>
                      </div>
                      <div className={styles.Acc_Contents}>
                      <div className={styles.Acc_Title}>
                              <h5>Shop</h5>
                          </div>
                                <p className={styles._Name}>Want to sell on Sokotimam?</p>
                                <div className={styles._Edit}><Link href="/dashboard" >Dash</Link></div>
                          </div>
                      <div className={styles.Acc_Contents}>
                          <div className={styles.Acc_Title}>
                              <h5>Store Credit</h5>
                          </div>
                          <p className={styles.Store_Name}>KES: 0.00</p>
                          

                          
                          
                          
                      </div>
                  </div>
            </div>
        </div>
        
    </div>
}

export default Account