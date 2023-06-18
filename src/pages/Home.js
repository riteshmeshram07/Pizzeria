import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/ban4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> <strong>Ritesh's Pizzeria</strong> </h1>
        <p><b> Indulge in Pizza Perfection!</b></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
