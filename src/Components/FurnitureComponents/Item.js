import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";




const Item=({item})=>{
    const [quantity, setQuantity]=useState(1);
    const dispatch=useDispatch();
    return(<div className="catalog">
        <img src={`./${item.img}.jpg`} alt='item'/>
        <h2>{item.name}</h2>
        <p>{item.price} грн</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=> {dispatch( addItemToCart({item,quantity}))} } >Купить</button>
    </div>)
}
export default Item;