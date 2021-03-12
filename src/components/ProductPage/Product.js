import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className="mainProduct">
            <div className="productItem">
                <img src="../png/1a.jpeg"></img>
            </div>
            <div className="description">
                <div className="mainDescription">
                    <div className="itemNameProduct">New Balance 574</div>
                    <div className="size">Size: 12 </div>
                    <div className="ProductPrice">300$</div>
                </div>
                <div className="ProductIndex">Index: MS327PBA</div>
            </div>
        </div>
    )
}

export default Product
