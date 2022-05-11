import React from 'react';
import '../styles/globals.css'
import {Layout} from '../components'
import { StateContext}from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
  <Component {...pageProps} />
  </Layout> 
  )
}

export default MyApp
