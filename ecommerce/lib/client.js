import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
 
export const client =sanityClient({
    projectId:'sy63nsd1',
    dataset:'production',//dev or production
    apiVersion:'2022-05-10',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})
//to use sanity images
const builder=imageUrlBuilder(client);
//to use sanity urls
export const urlFor =(source)=>builder.image(source);