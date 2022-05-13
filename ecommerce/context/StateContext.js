import react ,{createContext,useContext,useState,useEffect}from 'react';
import {Toaster} from 'react-hot-toast';
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
    setQty( (prevQty)=>{  
        if(prevQty-1<1)return 1;

        return prevQty -1

    });
    }
                
//context provider
return(
    <Context.Provider value={ {
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
    }}>
        
        {children}
    </Context.Provider>
)
}
