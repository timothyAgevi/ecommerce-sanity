import React from 'react'
import{ Product,FooterBanner,HeroBanner}from '../components';
import {client} from '../lib/client';
const Home = ({products,bannerData}) => {
  return ( 
  <>
  <HeroBanner heroBanner={bannerData.length&& bannerData[0]}
  />
  
       <div className='products-heading'>
      <h2> Best selling Products</h2>
      <p> Speakers of many variants</p>
    </div>
    <div className='products-container'>
      {
        products?.map(
          (product)=> <Product key={product._id} product={product}/>
        )
      }
    </div>

    <FooterBanner/>
    </>
  )
  
}
// fetch function
export const getServerSideProps=async()=>{
  const query ='*[_type=="product"]';
  const products =await client.fetch(query);

  const bannerQuery ='*[_type=="banner"]';
  const bannerData =await client.fetch(bannerQuery);

  return {
    props:{products,bannerData}
  }
}

export default Home;