import React, { useState } from "react";
import "./styles.css";

var foodCategory = {
  desserts: ["Ras Malai", "Gulaab Jamun", "Rabdi", "Jalebi", "Kaaju Katli"],
  chinese: [
    "Hakka Noodles",
    "Manchurian",
    "Fried Rice",
    "Chilly Paneer",
    "Manchow Soup"
  ],
  south_indian: ["Idli Sambhar", "Dosa", "Vada Sambhar", "Uttapam", "Biryani"],
  Common_Food: ["Pizza ", "Pasta", "Paani Puri", "Momos", "Sandwiches"]
};

var foodItem = Object.keys(foodCategory);

export default function App() {
  const [food, setfood] = useState("desserts");

  // function selectFood(food) {
  //   setfood(food);
  // }

  return (
    <div className="App">
      <h1>Hello Foodiess</h1>
      <p>Select One to choose the food category 👇</p>
      {foodItem.map(function (category) {
        return (
          <button
            onClick={() => setfood(category)}
            style={{ padding: "0.5rem", margin: "1rem" }}
          >
            {category}
          </button>
        );
      })}
      {foodCategory[food].map((items) => {
        return <li>{items}</li>;
      })}
    </div>
  );
}
