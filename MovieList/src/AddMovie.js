import React, {useState, useContext} from 'react';
import {MovieListContext} from './MovieListContext';

const AddMovie = () => {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [movies, setMovies] = useContext(MovieListContext);

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price:price}]);
    }

    return (
        <form onSubmit={addMovie}>
            <input type='text' name = 'name' value={name} onChange={updateName}/>
            <input type='text' price = 'price' value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;