import dataFurniture from "../../data/dataFurniture";
import Item from './Item';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/furnitureSlice";


const Furniture=()=>{

    const selectedCategory=useSelector(getSelectedCategory);
    return(<div className="products">
        {dataFurniture
        .filter(item=>{
            if (selectedCategory==='Все категории') return true;
            return selectedCategory===item.category;
        })
        .map((item)=><Item key={item.id} item={item}/>)}
    </div>)
}
export default Furniture;