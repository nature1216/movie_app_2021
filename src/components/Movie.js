import React from "react";
import { Link } from  "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genre}) {
    return (
        <Link to = {{
            pathname:`/movie/${id}`,
            state: {
                year:year,
                title:title,
                summary,
                poster,
                genre
            }
        }}>
            <div className="movies__movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul classNAme="genres">
                        {genre.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary}</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;