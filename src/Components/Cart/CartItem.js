import { useDispatch } from "react-redux";
import dataFurniture from "../../data/dataFurniture";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem=({cartItem})=>{

    const items= dataFurniture.find(item=>item.id===cartItem.furnitureId);
    const dispatch=useDispatch();
    return(<div className="cart">
        <p>{items.name} 
            <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='trash'/> 
            </span>
        </p>
        <p>Количество: {cartItem.quantity}</p>
        <p>Цена: {(items.price*cartItem.quantity).toFixed(2)} грн</p>
    </div>)
}
export default CartItem;