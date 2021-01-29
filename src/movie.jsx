import React from 'react';
import PropType from 'prop-types';

const Movie = ({id, year, title, summary, poster}) => {
    return <h5>{title}</h5>;
};

Movie.PropType = {
    id: PropType.number.isRequired,
    year:PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
}


export default Movie;