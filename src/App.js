import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <>
      <div className="App">
        {food.map((element, i) => {
          return (
            <FoodBox food={ element } />
          )
        })}

      </div>
      <AddFoodForm />
    </>
  );
}

export default App;
