import react ,{createContext,useContext,useState,useEffect}from 'react';
import {toast} from 'react-hot-toast';
//createContext hook
const Context=createContext();
//context functional component
export const StateContext=({children})=>{
const [showCart,setShowCart] = useState(false);
const [cartItem, setcartItem] = useState();
const [totalPrice, setTotalPrice] = useState();
const [totalQuantities, settotalQuantities] = useState();

}
