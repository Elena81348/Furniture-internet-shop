import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
 

const Cart=()=>{
    const cartItems=useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/512/external-cart-basic-ui-elements-2.5-sbts2018-solid-sbts2018.png" alt="cart"/>
            <h3>СУММА К ОПЛАТЕ: {totalPrice.toFixed(2)} грн</h3>
            {cartItems.map((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart;