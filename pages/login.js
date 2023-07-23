import styles from '../styles/Login.module.css'
import { useState } from 'react'
import Link from 'next/link'
import logo from '../images/logo-white.png'
import ribbon  from '../images/RepeatG2.png'
import downribbon from '../images/Repeatgrid_3.png'
import Image from 'next/image'
import { useAuthentication } from './api/auth'



function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword ]= useState('')

    const { signIn } = useAuthentication()

    const handleSignIn = (e)=>{
        e.preventDefault()
        
        signIn({email, password})
    }

    
    return (
        <div className={styles.Login_Box}>
           <div className={styles.testbug}> <Link href='/'><Image src={logo} width="100px" height="50px" objectFit="contain"></Image></Link></div>
            <img className={styles.Ribbon} src={ribbon} alt=''></img>
            
            <form onSubmit={handleSignIn}>
            <input  className={styles.Login_Box_input} type="text" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <input className={styles.Login_Box_input} type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <div className={ styles.forpass }> <Link  href=''>Forgot Password?</Link> </div>
            <button className={styles.Button} >Login</button>
            </form>
            
            
            
            <button className={`${styles.Button} ${styles.Facebook}`}>Facebook</button>
            <button className={ styles.Button }>Google</button>
            <p>New to Sokotimam? <Link href='/create' className={styles.SP} >Create an Account</Link></p>
            <img className='DownRibbon' src={downribbon} alt=''></img>
        </div>
    )
}

export default Login
