import foods from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState({
    query: '',
    list: []
  });

  function addToFoodList(newFood) {
    setFood([...food, newFood])
  };

  function updateFoodList(foodName) {
    const updatedFood = food.filter((item) => item.name !== foodName);
    setFood(updatedFood);
  }

  function renderFilteredList(state) {
    setFilteredFood(state);
  }


  return (
    <>
      <h1>Search</h1>
      <Search food={ food } renderFilteredList={ renderFilteredList }/>
      <h1>Food List</h1>
      <div className="App">
        {(filteredFood.query === '' ? food.map((element, i) => {
          return (
            <FoodBox key={ i } food={ element } updateFoodList={ updateFoodList }/>
          )
        }) : filteredFood.list.map((food, i) => {
            return <FoodBox key={ i } food={ food } />
          }))}

      </div>
      <AddFoodForm addToFoodList={ addToFoodList } />
    </>
  );
}

export default App;
