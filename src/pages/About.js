import React from "react";
import MultiplePizzas from "../assets/pepperoni.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
       <strong>Welcome to Ritesh's Pizzeria!

At Ritesh's Pizzeria, 
we are passionate about creating the perfect pizza experience. With carefully sourced, quality ingredients and handcrafted pizzas made with love, we strive to deliver exceptional taste in every bite. Whether you dine in or order for delivery, we guarantee a warm and inviting atmosphere. Join us at Ritesh's Pizzeria, where every slice tells a story!</strong> </p>
      </div>
    </div>
  );
}

export default About;
