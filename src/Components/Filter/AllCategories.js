import Filter from "./Filter";

const AllCategories=()=>{
    return( <div className="catalog"> 
            {['Все категории','Столы письменные','Компьютерные столы','Детская мебель','Прихожие','Тумбы под ТВ']
            .map((category,index)=><Filter key={index} category={category}/>)}
     </div>)
}
export default AllCategories;