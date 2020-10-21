import React, { useState } from 'react';
import Button from '../../../../core/components/Button';
import { makeRequest } from '../../../../core/utils/requests';
import ImageInfoLoader from '../Loaders/components/ImageInfoLoader';
import './styles.scss';

const Form = () => {

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: search })
            .then(response => setData(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }
    
    return (
      <>  
       <div className="form-container">
           <h1>Encontre um perfil Github</h1>
           <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <input 
                    value={search}
                    type="text"
                    className="input-control"
                    placeholder="Usuário Github"
                    onChange={handleOnchange}
                    />
                    <Button text="Encontrar"/>
                </div> 
           </form>
       </div>
       { isLoading ? <ImageInfoLoader/> : data && (
           <div>
                <div className="card-container">
                    <div className="card-content">
                            <div className="card-image">
                                <img 
                                    src={data.avatar_url} 
                                    alt="" 
                                    className="git-image"
                                />
                            </div>
                            <div className="col-2">
                                <div className="cards-inline">
                                    <span className="repository">Repositórios públicos: {data.public_repos}</span>
                                    <span className="followers">Seguidores: {data.followers}</span>
                                    <span className="following">Seguindo: {data.following}</span>
                                </div>
                                <div className="card-information">
                                    <h2 className="card-text">Informações</h2>
                                    <div className="card-list">
                                        <div className="card-list-item">
                                            <span className="card-list-text"><b>Empresa:</b> {data.company}</span>
                                        </div>
                                        <div className="card-list-item">
                                            <span className="card-list-text"><b>Website/Blog:</b> {data.blog}</span>
                                        </div>
                                        <div className="card-list-item">
                                            <span className="card-list-text"><b>Localidade::</b> {data.location}</span>
                                        </div>
                                        <div className="card-list-item">
                                            <span className="card-list-text"><b>Membro desde:</b> {data.created_at}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <span className="button-card">
                        <a href={data.html_url} target="_new">
                        <Button text="Ver Perfil"/> 
                        </a>
                    </span>    
                </div>
            </div>
       )}
       
       </>
    );
}

export default Form;