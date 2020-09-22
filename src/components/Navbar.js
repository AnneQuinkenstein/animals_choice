import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnimalsContext } from '../contexts/AnimalsContext';

const Navbar = () => {
    const { totalPrice } = useContext(AnimalsContext);

    return (
        <nav>
            <div>
                <div className="logo-wrapper">
                    <a href="https://www.linkedin.com/in/anne-quinkenstein/"><img src="/images/logo.png" alt='logo AQ' /> </a>
                    <p>Animals Choice</p>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </div>
            <div className="nav-cart">
                <p><mark>Total Price </mark> <span>&nbsp;&nbsp;{totalPrice}&nbsp;&nbsp;</span> Yards of Linen</p>
            </div>
        </nav>
    )
}

export default Navbar; 