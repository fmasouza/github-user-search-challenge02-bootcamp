import React from 'react';
import CardSearch from './components/CardSearch';
import Form from './components/Form';
import './styles.scss';

const Search = () => {
    return (
        
            <div className="search-container">
                <Form />
                <div className="card-container">
                <CardSearch/>
                </div>
            </div>
       
    )
}

export default Search;