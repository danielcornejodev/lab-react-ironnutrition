import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from './FoodBox';

export default function AddFoodForm() {
    const [foodList, setFoodList] = useState(() => []);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        calories: '',
        servings: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
    
        // console.log({ event });
        // console.log({ target: event.target })
    
        setFormData({
          ...formData, 
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = (event) => {
        //prevents the whole page from refreshing
        event.preventDefault();
    
        setFoodList([...foodList, formData]);
    
        setFormData({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })
      }

    


    return (

        <div id='form-div'>
            <h3>Add Food Entry</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label><br></br> 
                <Input className='ant-input' type='text' name='name' value={formData.name} onChange={(e) => handleChange(e)} /><br></br> 
                <label>Image:</label><br></br> 
                <Input type='text' name='image' value={formData.image} onChange={(e) => handleChange(e)} /><br></br> 
                <label>Calories:</label><br></br> 
                <Input type='text' name='calories' value={formData.calories} onChange={(e) => handleChange(e)} /><br></br> 
                <label>Servings:</label><br></br> 
                <Input type='text' name='servings' value={formData.servings} onChange={(e) => handleChange(e)} /><br></br> 
                <button>Create</button>
            </form>
        </div>

    )
}
