import React from 'react';
import GitImage from '../../../../core/assets/images/Git-Image.png';
import Button from '../../../../core/components/Button';
import './styles.scss';

const CardSearch = () => {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-image">
                    <img src={GitImage} alt="" className="git-image"/>
                </div>
                <div className="col-2">
                    <div className="cards-inline">
                        <span className="repository">Repositórios públicos: 62</span>
                        <span className="followers">Seguidores: 127</span>
                        <span className="following">Seguindo: 416</span>
                    </div>
                    <div className="card-information">
                        <h2 className="card-text">Informações</h2>
                        <div className="card-list">
                            <div className="card-list-item">
                                <span className="card-list-text"><b>Empresa:</b> @ZupIT</span>
                            </div>
                            <div className="card-list-item">
                                <span className="card-list-text"><b>Website/Blog:</b> https://thewashington.dev</span>
                            </div>
                            <div className="card-list-item">
                                <span className="card-list-text"><b>Localidade::</b> Uberlândia</span>
                            </div>
                            <div className="card-list-item">
                                <span className="card-list-text"><b>Membro desde:</b> 19/10/2013</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <span className="button-card">
                <Button text="Ver Perfil"/>  
            </span>          
        </div>
    );
}

export default CardSearch;