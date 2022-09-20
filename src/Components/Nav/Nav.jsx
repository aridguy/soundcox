import React from "react";
import './Nav.css';
import Cart from '../../Assets/Cart.png';
import Menu from '../../Assets/Menu.png'
import Search from '../../Assets/Search.png'

const Nav = () => {
    return (
        <div>

            <nav className="nav navbar-light">
                <ul>
                    <li><img width="32px" src={Menu} /></li>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li><img width="32px" src={Search} /></li>
                    <li><img width="32px" src={Cart} /></li>
                </ul>

            </nav>

        </div>
    );
}

export default Nav