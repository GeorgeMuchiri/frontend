import logo from '../images/logo-white.png'
import styles from '../styles/Header.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Router from 'next/router';
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { cartcontext } from '../pages/api/cartcontext';




const SEARCH_QUERY = gql`
    query allSearch($name: String!){

            allSearch(name: $name) {
              id
              name
              price
              image
              
            }

    }
`
const userdetails = gql`
query{
  userDetails{
    username
    email
	phone
    firstname
  }
}
`







function Header() {
    
    

   
    const [search, setSearch] = useState("")
    const  {data} = useQuery(userdetails)
    const searchterm = useQuery(SEARCH_QUERY,{
        variables: {name:  search},
    })
    

    function submit(e){
        
        const term = encodeURI(search)
        
        e.preventDefault()
        Router.push(`/search?=${term}`, {state: searchterm.data})
    }

    function submitform(e){
        const term = encodeURI(search)
        e.preventDefault()
        Router.push(`/search?=${term}`, {state: searchterm
        })
    }
    const {cart} = useContext(cartcontext)

    return (
        <div className={styles.header}>
            <div className={styles.header__one}>
               <div className={styles.header__logo}><Link href='/'><Image objectFit='cover'  src={logo}></Image></Link></div>
                    <form className={styles.search} onSubmit={submit}>
                        <input className={styles.header__search} 
                        type="text" placeholder="Search"
                        onChange={(e)=>{setSearch(e.target.value)}}></input>
                        <button className={styles.search_icon} onClick={submitform}> <SearchIcon /></button>
                    </form>
                    
                    
                
                <div className={styles.left_menu}>
                    <div className={styles.cart}>
                        <ShoppingCartOutlinedIcon className="" />
                       <div className={styles.cart_name}><Link href="/cart" >Cart</Link></div> 
                        <span>{cart.length}</span>
                    </div>
                    <div className={styles.account}>
                        <PermIdentityOutlinedIcon className={styles.account_icon} />
                        <div className={styles.account_name}>
                            { data ?  <Link href='/account'>{data.userDetails.username}</Link>: <Link href="/login">Login</Link> }
                              
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__two}>
                <div className={styles.categories}>
                        <MenuIcon className={styles.burger__menu} />
                        <span>Categories</span>
                        <KeyboardArrowDownIcon className={styles.down_menu} />

                        
                </div>
                
                <div className={styles.top__searches}>
                       <span> Top Searches: </span>
                       <div className={styles.link}><Link href="#">bags</Link></div>
                       <div className={styles.link}><Link href="#">shirts</Link></div>
                       <div className={styles.link}><Link href="#">watches</Link></div>
                       <div className={styles.link}><Link href="#">shirts</Link></div>
                       <div className={styles.link}><Link href="#">shoes</Link></div>
                        
                        
                        
                    
                </div>
                <div className={styles.addresses}>
                   <span> Ship To: Nairobi </span>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
