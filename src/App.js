
import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Furniture from './Components/FurnitureComponents/Furniture';

function App() {
  return (
    <div className="App">
      <h1>МАГАЗИН МЕБЕЛИ</h1>
      <div className='block'>
        <AllCategories/> 
        <Cart/>
      </div>
        <Furniture/>
    </div>
  );
}

export default App;
