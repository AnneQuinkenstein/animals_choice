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
                <p>Total Price: 0 Bottlecaps</p>
            </div>
        </nav>
    )
}

export default Navbar; 