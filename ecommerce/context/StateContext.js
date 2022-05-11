import react ,{createContext,useContext,useState,useEffect}from 'react';
import {toast} from 'react-hot-toast';
//createContext hook
const Context=createContext();
//context functional component
export const StateContext=({children})=>{
const [showCart,setShowCart] = useState(false);
const [cartItems, setcartItem] = useState();
const [totalPrice, setTotalPrice] = useState();
const [totalQuantities, settotalQuantities] = useState();
const [qty, setQty] = useState(1);
//increaseQuantity function
const incQty=()=>{
    setQty( (prevQty)=>prevQty +1)
}
//decrease Quantity function
const decQty=()=>{
    setQty( (prevQty)=>  
        prevQty -1)};
        
    
                

//context provider
return(
    <Context.Provider value={ {
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty
    }}>
        
        {children}
    </Context.Provider>
)
}
