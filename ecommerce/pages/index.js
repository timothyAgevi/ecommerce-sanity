import React from 'react'

const Home = () => {
  return ( <>
       <div>
      <h2> Best selling Products</h2>
      <p> Speakers of many variants</p>
    </div>
    <div>
      {
        ['Product 1','Product 2'].map(
          (product)=>product
        )
      }
    </div>

    footer
    </>
  )
}

export default Home