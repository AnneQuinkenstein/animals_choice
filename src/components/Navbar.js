import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="cart">Cart</Link></li>
            </ul>
            <div>
                <p><mark>Total Price </mark> <span>0</span> Yards of Linen</p>
            </div>
        </nav>
    )
}

export default Navbar; 