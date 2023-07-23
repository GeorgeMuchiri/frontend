import React from 'react';
import styles from '../styles/Banner.module.css'
import image_1 from '../images/image_1.jpg';
import image_2 from '../images/image_2.jpg';
import image_3 from '../images/image_3.jpg';
import image_5 from '../images/image_5.jpg';
import Image from 'next/image';
import small_image_2 from '../images/small_image_3.jpg';

import { ApolloClient, gql, InMemoryCache} from '@apollo/client'


const adverts = gql`
query{
    imageAdvert{
      id
      image
      name
    }
  }
  `


function Banner({data}) {

    

    return (
        <div className={styles.banner_container}>
            
            <div className={styles.big_banner}>
            <div className={styles.img_banner}>

            
                    <Image src={image_1} objectFit='contain' width='500px' height='350px'></Image>
                    <Image src={image_2} objectFit='contain' width='500px' height='350px'></Image>
                    <Image src={image_3} objectFit='contain' width='500px' height='350px'></Image>
                    <Image src={image_5} objectFit='contain' width='500px' height='350px'></Image>
                    <Image src={image_1} objectFit='contain' width='500px' height='350px'></Image>
                    <button className={styles.big_banner_button}>Shop Now</button> 
            </div>
                 
            
            </div>
            <div className={styles.small_banner}>
                <div className={styles.img_small}>
                    <Image src={small_image_2} width='350px' height='350px' objectFit='cover'></Image>
                </div>
            </div>
        </div>
    )
}




export default Banner;
