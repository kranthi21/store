import React from "react";
import "./Home.css";
import banner from "./banner.jpg";
import Product from "./Product";
import product1 from "./product1.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />

        <div className="home__row">
          <Product
            id="12345"
            title="the lean Startup"
            image={product1}
            price={19.34}
            rating={5}
          />
          <Product />
          <Product />
          {/* products*/}
        </div>

        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
