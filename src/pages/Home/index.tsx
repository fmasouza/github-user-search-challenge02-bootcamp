import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">
                    Desafio do Capítulo 3, Bootcamp DevSuperior
                </h1>
                <p className="home-text-subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p className="home-text-subtitle">Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
                <p className="home-text-subtitle">Este design foi adaptado a partir de Ant Design System for Figma, 
                de Mateusz Wierzbicki: <a href="link">antforfigma@gmail.com</a> </p>
                <div className="btn">
                    <Link to="/search"> 
                        <Button text="Começar"/>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default Home;