import React from 'react'
import {client,urlFor}from '../../lib/client';
const ProductDetails = ({product,products}) => {
  return (
    <div>
        <div className='product-detail-container'>
<div className='image-container'>
<img src="" />
</div>
        </div>
    </div>
  )
}

export const getStaticProps = async ({params:{slug}}) => {
    const query = `*[_type == "product" && slug.current=='${slug}'][0]`;
    //query to fetch similar prodcts
    const productsQuery='*[_type=="product"]';

    const product= await client.fetch(query);
  const products=await client.fetch(productsQuery)
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails