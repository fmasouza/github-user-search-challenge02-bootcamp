import React from 'react';
import Button from '../../../../core/components/Button';
import './styles.scss';

const Form = () => {
    return (
       <div className="form-container">
           <h1>Encontre um perfil Github</h1>
           <form>
                <div className="input-form">
                    <input 
                    type="text"
                    className="input-control"
                    placeholder="Usuário Github"
                    />
                    <Button text="Encontrar"/>
                </div> 
           </form>
       </div>
    );
}

export default Form;