import React from 'react'
import "./Checkout.css"
import banner from "./banner.jpg"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className = "checkout__left">
                <img className="checkout__ad"
                src={banner} alt=""/>
                <div>
                    <h2 className="checkout__title">Your Basket</h2>

                    {/*basket items*/}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>

            </div>
            
        </div>
    )
}

export default Checkout
