import React from 'react'
import product1 from './product1.jpg'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className = "product__info">
                <p> the lean Startup</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className = "product__rating">
                    <p>*</p>
                </div>
            </div>
            <img  src={product1} alt=""/>
            <button>Add to Basket</button>

        </div>
    )
}

export default Product
