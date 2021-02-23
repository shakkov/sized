import React from 'react'
import './navBar.css'

const NavBar = () => {
    return (
        <div className="Nav">
            <div className="navLogo">
                Sized<span style={{ color: 'rgb(0, 183, 255)' }}>//</span>
            </div>
            <div className="search">
                <form name="search" method="post">
                    <input
                        type="text"
                        placeholder="search your new sneakers"
                    ></input>
                </form>
                <button type="submit" form="data">
                    Find
                </button>
            </div>
            <div className='Brand'> 
            <ul>
                <li>
                    <a>Nike</a>
                </li>
                <li>
                    <a>Adidas</a>
                </li>
                <li>
                    <a>New Balance</a>
                </li>
                <li>
                    <a>Vans</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default NavBar
