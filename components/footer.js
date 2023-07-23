
import styles from  '../styles/Footer.module.css'
import Link from 'next/link';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
// import repeat from '../images/Repeatgrid.png';

function Footers() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Links}>
                <div className={styles.Need_Help}>
                    <h4>Need Help?</h4>
                    <div className={styles.Sublink}><Link href="" >How to Register</Link></div><br/>
                    <Link href="" className={styles.Sublink}>Forgot Password?</Link><br/>
                    <Link href="" className={styles.Sublink}>Open Account</Link><br/>
                    <Link href="" className={styles.Sublink}>FAQ</Link><br/>
                    <Link href="" className={styles.Sublink}>After Sale Policy</Link>
                </div>
                <div className={styles.Partner}>
                    <h4>Partner with Us</h4>
                    <Link href="" className={styles.Sublink}>Seller Center</Link><br/>
                    <Link href="" className={styles.Sublink}>Payment Setup</Link><br/>
                    <Link href="" className={styles.Sublink}>Sokotimam Policy</Link><br/>
                </div>
                <div className={styles.About}>
                    <h4>About Us</h4>
                    <Link href="" className={styles.Sublink}>Sokotimam Careers</Link><br/>
                    <Link href="" className={styles.Sublink}>Our Mission</Link><br/>
                    <Link href="" className={styles.Sublink}>Contact Us</Link><br/>
                </div>
                <div className={styles.International}>
                    <h4>International</h4>
                    <Link href="" className={styles.Sublink}>Kenya</Link><br/>
                    <Link href="" className={styles.Sublink}>Uganda</Link><br/>
                    <Link href="" className={styles.Sublink}>Tanzania</Link><br/>
                </div>
            </div>
            <div className={styles.Socials}>
                <img className={styles.Socials_img} src={facebook} alt=''></img>
                <img className={styles.Socials_img} src={twitter} alt=''></img>
                <img className={styles.Socials_img} src={instagram} alt=''></img>
                
            </div>
            <p>© 2021 Copyright: sokotimam</p>
            <div className={styles.Ribbon}>
                {/* <img src={repeat} className={styles.Repeat_Grid} alt=''></img> */}
            </div>
            
        </div>
    )
}

export default Footers;
