import React, {useContext} from 'react';
import {MovieListContext} from './MovieListContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieListContext);
    return (
        <div>
        <h3>Dev Ed</h3>
        <h3>List of Movies: {movies.length}</h3>
        </div>
    );
};


export default Nav;