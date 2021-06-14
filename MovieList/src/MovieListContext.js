import React, {useState, createContext} from 'react';

export const MovieListContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$120',
            id: 2312423
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23122324
        }
    ]);

    return (
            <MovieListContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieListContext.Provider>
    );
}