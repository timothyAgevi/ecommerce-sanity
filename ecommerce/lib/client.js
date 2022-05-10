import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
 
const clientn =sanityClient({
    projectId:'',
    dataset:'',//dev or production
    apiVersion:'',
    useCdn:true,
    token:''
})