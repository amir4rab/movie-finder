// import { 
//     Title,
//     Year,
//     Rated,
//     Released,
//     Runtime,
//     Genre,
//     Director,
//     Writer,
//     Actors,
//     Plot,
//     Language,
//     Country,
//     Awards,
//     Poster,
//     Ratings,
//     Metascore,
//     imdbRating,
//     imdbVotes,
//     imdbID,
//     BoxOffice,
//     Production
// } from "./testData";

import movieData from "./testData";
import classes from "./movie.style.module.scss";

import Imdbrating from "../imdbratingComponent/imdbrating.component";


const MovieComponent = props => {
    const movieTitle = movieData.Title.length > 30 ? movieData.Title : movieData.Title.slice(0,27) + '...';

    return (
        <div className={ classes.moviecomponent }>
            <div className={ classes.mainDetails}>
                <div className={classes.img}>
                    <img src={ movieData.Poster } alt="movie poster"/>
                </div>
                <div className= { classes.details }>
                    <h1 className= { classes.title }>
                        { movieTitle }
                    </h1>
                    <div>
                        <Imdbrating rating={ movieData.imdbRating } />
                    </div>
                    <div>
                        { movieData.Rated }
                    </div>
                    <div>
                        { movieData.Year }
                    </div>
                    <div>
                        { movieData.Runtime }
                    </div>
                </div>
            </div>
            <div className={ classes.secDetails }>
                <div>
                    <h3>
                        Director
                    </h3>
                    <p>
                        { movieData.Director }
                    </p>
                </div>
                <div>
                    <h3>
                        Writer
                    </h3>
                    <p>
                        { movieData.Writer }
                    </p>
                </div>
                <div>
                    <h3>
                        Actors
                    </h3>
                    <p>
                        { movieData.Actors }
                    </p>
                </div>
                <div>
                    <h3>
                        Plot
                    </h3>
                    <p>
                        { movieData.Plot }
                    </p>
                </div>
                <div>
                    <h3>
                        Language
                    </h3>
                    <p>
                        { movieData.Language }
                    </p>
                </div>
                <div>
                    <h3>
                        Country
                    </h3>
                    <p>
                        { movieData.Country }
                    </p>
                </div>
                <div>
                    <h3>
                        Awards
                    </h3>
                    <p>
                        { movieData.Awards }
                    </p>
                </div>
                <div>
                    <h3>
                        Ratings
                    </h3>
                    <p>
                        {/* { movieData.Ratings } */}
                        placeholder
                    </p>
                </div>
            </div>
        </div>
    )
};

export default MovieComponent;

