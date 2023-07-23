import styles from '../styles/Create.module.css'
import Link from 'next/link'
import darklogo from '../images/logo-dark.png'
import downribbon from '../images/Repeatgrid_3.png'
import  Router  from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import Image from 'next/image'



const SIGN_UP = gql`
    mutation SignUp(
        $email: String!,
        $username: String!,
        $firstname: String!,
        $lastname: String!,
        $phone: String!,
        $password: String!
    ){
        createUsers(
            username: $username,
            email: $email,
            firstname: $firstname,
            lastname: $lastname,
            phone: $phone,
            password: $password
        ){
            username
            email
        }
    }

`


function create() {

    const [firstName, setFirstName] =  useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] =  useState("")

    const [RegisterUser] = useMutation(SIGN_UP,{
        variables: {
            username: username,
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phone,
            password: password
        },
        onCompleted: () => Router.push('/')
    })

    function submitform(e){
        e.preventDefault()
        RegisterUser()
        
    }

  return (
    <div className={styles.Two_Div}>
            <div className={styles.Fancy_Text}>
                <div className={styles.D_Logo}><Link href='/'><Image src={darklogo} width="400px" height="200px" objectFit="cover"></Image></Link></div>
                <p className={styles.Welcome}>Welcome</p>
                <p className={styles.A_Basket}>to africa's basket</p>
                <img className='downRibbon' src={downribbon} alt=''></img>
            </div>
            <div className={styles.Input_Area}>
            <form onSubmit={submitform}>
                <h1 className={styles.Announce}>Sign Up</h1>
                <div className={styles.Cont_Area}>
                    
                    <div className={styles.I_one}>
                    
                    <input  className={`${styles.I_Elements} ${styles.input}`} type='text' placeholder='username' value={username} onChange={(e)=> setUserName(e.target.value)}></input>
                    <input  className={`${styles.I_Elements} ${styles.input}`} type='text' placeholder='firstname' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                    
                    <input  className={`${styles.I_Elements} ${styles.input}`} type='text' placeholder='phone' value={phone} onChange={(e)=>(setPhone(e.target.value))}></input>
                   
                    <input className={`${styles.I_Elements} ${styles.input}`} type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <div className={styles.I_two}>
                    
                    <input  className={`${styles.I_Elements} ${styles.input}`} type='text' placeholder='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                   
                    <input  className={`${styles.I_Elements} ${styles.input}`} type='email' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    
                    <input className={`${styles.I_Elements} ${styles.input}`} type='password' placeholder='confirm password'></input>
                    </div>
                    
                
                    
                </div>
                <div className={styles.Checkbox}>
                <input className={styles.Check} type="checkbox"></input><p className=''> I agree to the terms and conditions</p>
                </div>
                <button className={styles.Create_Button}>Create Account</button>
                </form>
            </div>
        </div>
  )
}

export default create