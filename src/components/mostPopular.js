import React from 'react'
import './mostPopular.css'

const MostPopular = () => {
    return (
        <div className="mainPopular">
            <div className="name">
                <p>Most popular</p>
            </div>
            <div className="grid">
                <div className= 'item'>
                    <img src="png/1a.jpeg"></img>
                    <div className='itemName'>New Balance 574</div>
                    <div className='Price'>300$</div>
                </div>
                <div className= 'item'>
                    <img src="png/2a.jpeg"></img>
                    <div className='itemName'>Puma Future Rider</div>
                    <div className='Price'>300$</div>
                </div>
                <div className= 'item'>
                    <img src="png/3a.jpeg"></img>
                    <div className='itemName'>Nike Air Max 1</div>
                    <div className='Price'>300$</div>
                </div>
                <div className= 'item'>
                    <img src="png/4a.jpeg"></img>
                    <div className='itemName'>Puma RS-Connect</div>
                    <div className='Price'>300$</div>
                </div>
                <div className= 'item'>
                    <img src="png/5a.jpeg"></img>
                    <div className='itemName'>Adidas Superstar</div>
                    <div className='Price'>300$</div>
                </div>
                <div className= 'item'>
                    <img src="png/6a.jpeg"></img>
                    <div className='itemName'>Nike Air Max 90</div>
                    <div className='Price'>300$</div>
                </div>
            </div>
        </div>
    )
}

export default MostPopular
