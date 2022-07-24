import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  return (
    <div>
            <h3>Movies Show Component!</h3>
            <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}
export default MovieShow;
