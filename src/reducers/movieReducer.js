import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,  // Preserve other state properties (appTitle)
                movies: state.movies.filter(movie => movie.id !== action.payload)
            };

        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload] // Add new movie to the list
            };

        default:
            return state;
    }
}

export default reducer;
