import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Search.module.css'




import {useLocation} from 'react-router-dom'

function Search(props) {
    
    const location = useLocation()
    console.log(location.state.allSearch)

  return <div>
      <Header/>
      <div  className={sytles.Search_Container}>
        <div className={styles.Search_Leftside}>
            <div className={styles.Search_Cat}><h4 className={styles.Search_Name}>CATEGORY</h4></div>
            <div className={styles.Search_Price}><h4 className={styles.Search_Name}>PRICE</h4></div>
        </div>

            <div className={styles.Search_Rightside}>
                <div className={styles.Search_Toptitle}>
                    <h5 className={styles.Search_No}>{location.state.allSearch.length} products found</h5>
                </div>
                <div className={styles.Search_Grid}>
                    {location.state.allSearch.map((prod) =>
                        <div key={prod.id}>
                            <div className={styles.Search_Card}>
                            
                            <div className={styles.SG_Img}><Image  src={prod.image} alt=''></Image></div>
                            <p className={styles.SG_Title}>{prod.name.slice(0,20)}...</p>
                            <p className={styles.SG_Title}>KES: {prod.price}</p>
                            
                            <button className={styles.Search_Card_button}>Add to cart</button>
                        </div>
                        
                        </div>
                        )}
                </div>
          
      </div>
      </div>
      
      <Footer />
  </div>;
}

export default Search;
