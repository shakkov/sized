import React from 'react'
import './navBar.css'
const NavBar = () => {
    return (
        <div className="Nav">
            <div className="navLogo">Sized//</div>
            <form name="search" method="post">
                <input type="text" size="40"></input>
            </form>
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
    )
}

export default NavBar
