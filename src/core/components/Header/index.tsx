import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
    return (
        <header className="main-header bg-primary">
        <Link to="/">
            <span className="logo-text">Bootcamp DevSuperior</span>
        </Link>
        </header>
    );
}

export default Header;