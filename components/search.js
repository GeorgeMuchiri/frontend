import React from 'react';
import Header from './Header';
import './Search.css'


import Footers from './Footers';

import { useRouter } from 'next/router';

function Search(props) {
    const router = useRouter()
    console.log(router.query)
  return <div>
      <Header/>
      <div  className='Search_Container'>
        <div className='Search_Leftside'>
            <div className='Search_Cat'><h4 className='Search_Name'>CATEGORY</h4></div>
            <div className='Search_Price'><h4 className='Search_Name'>PRICE</h4></div>
        </div>

            <div className='Search_Rightside'>
                <div className='Search_Toptitle'>
                    <h5 className='Search_No'>{location.state.allSearch.length} products found</h5>
                </div>
                <div className='Search_Grid'>
                    {location.state.allSearch.map((prod) =>
                        <div key={prod.id}>
                            <div className='Search_Card'>
                            
                            <img className='SG_Img' src={String("http://localhost:8000/"+prod.image)} alt=''></img>
                            <p className='SG_Title'>{prod.name.slice(0,20)}...</p>
                            <p className='SG_Title'>KES: {prod.price}</p>
                            
                            <button className='Search_Card_button'>Add to cart</button>
                        </div>
                        
                        </div>
                        )}
                </div>
          
      </div>
      </div>
      
      <Footers />
  </div>;
}

export default Search;
