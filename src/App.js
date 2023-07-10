import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);

  function addToFoodList(newFood) {
    setFood([...food, newFood])
  };

  return (
    <>
      <h1>Search</h1>
      <Search />
      <h1>Food List</h1>
      <div className="App">
        {food.map((element, i) => {
          return (
            <FoodBox food={ element } />
          )
        })}

      </div>
      <AddFoodForm addToFoodList={ addToFoodList } />
    </>
  );
}

export default App;
