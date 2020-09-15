import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/">Home</Link>
            <Link to="contact">Contact</Link>
        </div>
    )
}

export default Navbar; 