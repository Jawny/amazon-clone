import React from 'react'
import './Product.scss'

function Product({id, title, image, price, rating}) {
    return (
        <div className="product-container">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))}
                </div>   
            </div>
            <img src={image}/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
