import React from 'react';
import '../styles.css';

function Header() {
    return (
       <div className="header">
            <img className="logo" src='logo.png' alt="Moviedux Logo" />
            <p className="header-text">It's time for popcorn, Find your next movie here!</p>
        </div>
    );
}

export default Header;