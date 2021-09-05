import React from 'react'
import "./Home.css"
import banner from './banner.jpg'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={banner} alt=""/>

                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                    {/* products*/}

                </div>

                <div className="home__row">
                <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                
                    <Product/>
                </div>

            </div>       
        </div>
    )
}


export default Home
