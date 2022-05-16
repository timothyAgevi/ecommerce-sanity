const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItems)
    try {
    const params = {
        submit_type:'pay',
        mode:'payment',
        payment_method_types:[ 'card'],
        billing_address_collection:'auto',
        shipping_options:[
            { shipping_rate: 'shr_1L01fmKR6HN9VIbuNiQ8rFY9'},
            { shipping_rate: 'shr_1L01iUKR6HN9VIbul66kyAxC'}
        ],
        line_items: req.body.cartItems.map( (item)=>{//map thru items since modify info for each item
          const img=item.image[0].asset._ref;
          const newImage=img.replace('image','https://cdn.sanity.io/images/sy63nsd1/production/').replace('-webp','.webp');//webp is img format can convert to jpg/png
          //object represeting one of the products
          return{
              price_data:{
                currency:'usd',
                product_data:{
                  name:item.name,
                  images:[newImage],
                },
                unit_amount:item.price*100 //since unit amount must be in cents
              },
              adjustable_quantity:{
                enabled:true,
                minimum:1,
              },
          };

        }),
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`
    }


      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
        
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}