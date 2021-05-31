import React from "react";
import { withRouter } from "react-router";
class Movie extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.match.params.id
        this.state = {
            tmdbInfo:{},
            omdbInfo:{}
        };
    }
    //
    componentDidMount = () => {

        fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US&append_to_response=videos`)
        .then((res) => res.json())
        .then((tmdbData) => {
            const imdbId = tmdbData.imdb_id;
            const tmdbObj ={
            title: tmdbData.original_title,
            image: tmdbData.poster_path,
            tmdbRaiting: tmdbData.vote_average,
            tagline: tmdbData.tagline,
            trailer : tmdbData.videos.results[0].key
        }
            console.log(tmdbObj)
            this.setState({
                tmdbInfo: tmdbObj
            })
            return imdbId;
        })
         .then( (imdbId) => {
            fetch(`http://www.omdbapi.com/?apikey=bdf00e81&i=${imdbId}`)
            .then(res => res.json())
            .then( (omdbData) => {
                const omdbObj ={
                    actors: omdbData.Actors,
                    writer : omdbData.Writer,
                    director : omdbData.Director, 
                    rottenTomatoes : omdbData.Ratings[1].Value,
                    imdbRating : omdbData.imdbRating,
                    metacritic : omdbData.Ratings[2].Value,
                    genres : omdbData.Genre,
                    language : omdbData.Language,
                    plot : omdbData.Plot,
                    year: omdbData.Year,
                    runTime: omdbData.Runtime,
                }
                console.log(omdbObj);
                this.setState({
                    omdbInfo: omdbObj
                })
            })
    })
}





    //     const promiseArr = [fetch (`https://api.themoviedb.org/3/find/${this.id}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US&external_source=imdb_id`)
    //     .then((res)=>res.json()), fetch (`http://www.omdbapi.com/?apikey=bdf00e81&i=${this.id}`)
    //     .then((res)=>res.json())]
    // //    fetch (`https://api.themoviedb.org/3/find/${this.id}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US&external_source=imdb_id`)
    // //     .then((res)=>res.json())
    // Promise.all(promiseArr).then((res)=> {
    //         const tmdbData = res[0].movie_results[0];
    //         const omdbData = res[1];
    //         console.log(omdbData.Ratings[1].Value)
    //         const movieObj = {
    //             // title: tmdbData.original_title,
    //             // img: tmdbData.poster_path,
    //             // id: tmdbData.id,
    //             // popularity: tmdbData.popularity,
    //             // tmdbRaiting: tmdbData.vote_average,
    //             rottenTomatoes : omdbData.Ratings[1].Value,
    //             imdbRating : omdbData.imdbRating,
    //             Metacritic : omdbData.Ratings[1].Value,
    //             language: tmdbData.original_language,
    //             actors : omdbData.Actors,
    //             director : omdbData.Director,
    //             genres : omdbData.Genre,
    //             plot : omdbData.Plot,
    //             writer : omdbData.Writer, 
    //         }
    //         this.setState({
    //             movie: movieObj
    //         })
    //     })    
    // }
    render() {
        return (<div className="p-movie">
           
            <h1>{this.state.tmdbInfo.title}</h1>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.tmdbInfo.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>)
    }
}
export default withRouter (Movie);


















