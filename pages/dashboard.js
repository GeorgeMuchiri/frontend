import Header from "../components/header";
import Footers from "../components/footer"
import craft from '../images/hand-craft.png'
import styles from '../styles/Dashboard.module.css'

import styles1 from '../styles/Account.module.css'

//import dash from '../images/dash.svg'
import customers from '../images/customers.svg'
import inventory from '../images/inventory.svg'
import reviews from '../images/reviews.svg'
import logout from '../images/logout.svg'
import image from '../images/image_2.jpg'
import prof from '../images/Dummy.jpg.webp'
import Image from "next/image";
import Link from "next/link";


function Dash() {
    return <div>
        <Header />
        <div className={styles._dash}>
              <div className={styles.Left_Dash}>
                  <div className={styles.Left_Profile}>
                      <img src={craft} alt=''></img>
                      <h5>Handcraft Africa Ltd</h5>
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
                    <h2> Welcome back, Handcraft!</h2>
                    <p> Friday 21st July, 2022</p>
                      <div className={styles.Announcement}>
                        <div className={styles.an_text}>
                        <h2>Good Job!</h2>
                        <p> you have 23 new visitors 
                          <br />in the last 7 days</p>
                        </div>
                        <img src={inventory} alt=''></img>
                      </div>
                      <div className={styles.P_grid}>
                        <div className={styles._grid_item}>
                          <h5>+8.5K</h5>
                          <p>Favorite</p>
                        </div>
                        <div className={styles._grid_item}>
                          <h5>+4.1K</h5>
                          <p>Add to Bag</p>
                        </div>
                        <div className={styles._grid_item}>
                          <h5>+5.9K</h5>
                          <p>Orders</p>
                        </div>
                      </div>
                      <div className={styles.Recent_Sold}>
                          <h4> Recent Sold</h4>
                          <div className={styles.R_product}>
                          <Image src={image} width={500} height={500} objectFit='contain'></Image>
                            <div className={styles.R_product_desc}>
                              <h5 className={styles.R_product_h5}> Hand Made Bag</h5>
                              <p className={styles.R_product_p}>Multicolor type</p>
                              <div className={styles.earned}><p>KES 1,900 earned</p></div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.Welcome_Right}>
                    <h4>Performance</h4>
                    <p> New Clients(21)</p>
                    <div className={styles.client_prof1}>
                      <div className={styles.client_prof}>
                        <img src={prof} alt=''></img>
                        <p>Kenneth K.</p>
                      </div>
                      <div className={styles.client_prof}>
                        <img src={prof} alt=''></img>
                        <p>Joseph W.</p>
                      </div>
                      <div className={styles.client_prof}>
                        <img src={prof} alt=''></img>
                        <p>Kelvin W.</p>
                      </div>
                      <div className={styles.client_prof}>
                        <img src={prof} alt=''></img>
                        <p>Timothy N.</p>
                      </div>
                      
                    </div>
                    <div className={styles.chart}>
                    <h6>Your progress</h6>
                    <div className={styles.chart_perf}>
                        <h6>Total Income: 18K</h6>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.chart_perf}>
                      <h6>Best Selling: 5.5K</h6>
                      <div className={styles.bar}></div>
                    </div>
                    <div className={styles.chart_perf}>
                      <h6>Worst Selling: 100</h6>
                      <div className={styles.bar}></div>
                    </div>
                    </div>
                  </div>
                  
              </div>
        </div>
        <Footers />
    </div>
  }
  
  export default Dash;