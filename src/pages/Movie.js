import React from "react";
import { withRouter } from "react-router";
class Movie extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.match.params.id
        // console.log(this.movieID);
        this.state = {
          movie: {},
        };
    }
    //
    componentDidMount = () => {

        // fetch('TMDBgetMovieDetails')
        // .then((res) => res.json()).then((tmdbInfo) => {
        //     this.setState({
        //         poster: tmdbInfo.poster,
        //         title: tmdbInfo.title
        //     })
        //     return tmdbInfo.imdb_id;
        // }).then( (imdbId) => {
        //     fetch(`OMDB/${imdbId}`).then(stream => stream.json()).then( (omdbInfo) => {
        //         this.setState({
        //             plot: omdbInfo.plot
        //         })
        //     })
        // } )





        const promiseArr = [fetch (`https://api.themoviedb.org/3/find/${this.id}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US&external_source=imdb_id`)
        .then((res)=>res.json()), fetch (`http://www.omdbapi.com/?apikey=de97b29a&i=${this.id}`)
        .then((res)=>res.json())]
    //    fetch (`https://api.themoviedb.org/3/find/${this.id}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US&external_source=imdb_id`)
    //     .then((res)=>res.json())
    Promise.all(promiseArr).then((res)=> {
            const tmdbData = res[0].movie_results[0];
            const omdbData = res[1];
            console.log(omdbData.Ratings[1].Value)
            const movieObj = {
                title: tmdbData.original_title,
                img: tmdbData.poster_path,
                id: tmdbData.id,
                popularity: tmdbData.popularity,
                tmdbRaiting: tmdbData.vote_average,
                rottenTomatoes : omdbData.Ratings[1].Value,
                imdbRating : omdbData.imdbRating,
                Metacritic : omdbData.Ratings[1].Value,
                language: tmdbData.original_language,
                actors : omdbData.Actors,
                director : omdbData.Director,
                genres : omdbData.Genre,
                plot : omdbData.Plot,
                writer : omdbData.Writer, 
            }
            this.setState({
                movie: movieObj
            })
        })    
    }
    render() {
        return (<div className="p-movie">
            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.img}`} alt={this.state.movie.title}/>
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.language}</p>
            <p>{this.state.movie.id}</p>
            </div>)
    }
}
export default withRouter (Movie);


















