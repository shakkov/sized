import React, { useState } from 'react'
import './mostPopular.css'
import { Route, Link } from 'react-router-dom'

const MostPopular = () => {
    const [products, setProducts] = useState([
        {
            imageSrc: 'png/1a.jpeg',
            name: 'New Balance 574',
            price: '300$',
        },
        {
            imageSrc: 'png/2a.jpeg',
            name: 'Puma Future Rider',
            price: '300$',
        },
        {
            imageSrc: 'png/3a.jpeg',
            name: 'Nike Air Max 1',
            price: '300$',
        },
        {
            imageSrc: 'png/4a.jpeg',
            name: 'Puma RS-Connect',
            price: '300$',
        },
        {
            imageSrc: 'png/5a.jpeg',
            name: 'Adidas Superstar',
            price: '300$',
        },
        {
            imageSrc: 'png/6a.jpeg',
            name: 'Nike Air Max 90',
            price: '300$',
        },
        
    ])

    return (
        <div className="mainPopular">
            <div className="name">
                <p>Most popular</p>
            </div>
            <div className="grid">
                {products.map((item, idx) => (
                    <Link to="/product/" key={idx}>
                        <div className="item">
                            <img src={item.imageSrc} />
                            <div className="itemName">{item.name}</div>
                            <div className="Price">{item.price}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MostPopular
