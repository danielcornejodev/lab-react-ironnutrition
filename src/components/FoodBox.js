import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox({ food, key, updateFoodList }) {

    const calcCalories = () => {
        let totalCal = food.servings * food.calories;
        return totalCal;
    }



    const handleDelete = (foodName) => {
        updateFoodList(foodName);
    }

    return (
        <div id='food-card'>
            <Card>
                <Col>
                    <h1>{food.name}</h1>
                </Col>
            </Card>
            <Card>
                <img src={food.image} />
                <h2>Calories: {food.calories}</h2>
                <h2>Servings: {food.servings}</h2>
                <h1>Total Calories: {calcCalories()}</h1>
                <Button type="primary" onClick={() => handleDelete(food.name)}>Delete</Button>
            </Card>

        </div>
    )
}
