import React from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { API_KEY, API_KEY_OMDB } from "../constants";
import "./Movie.css"

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
        fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
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
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&i=${imdbId}`)
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
    render() {
        let template = '';
        if (this.state.tmdbInfo === undefined||this.state.omdbInfo === undefined ){
             template = <div>loading</div>
        }
        else{
            template = (
                        <div>
                            <div className="jumbotron">
                                <h1 className="display-3 text-center">{this.state.tmdbInfo.title}</h1>
                                <p className="display-6 text-center">{this.state.tmdbInfo.tagline}</p>
                                <hr className="my-3"/>
                                <p className=" lead text-center">Directed by: {this.state.omdbInfo.director} </p>
                            </div>
                            <div className="container">
                                <Row>
                                    <Col lg={6} className="text-center">
                                        <img src={`https://image.tmdb.org/t/p/w400${this.state.tmdbInfo.image}`} alt={this.state.tmdbInfo.title}/>
                                    </Col>
                                    <Col lg={6}>
                                    <dl className="row">
                                        <dt className="col-sm-3">Genres:</dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.genres}</dd>

                                        <dt className="col-sm-3">About:</dt>
                                        <dd className="col-sm-9">
                                            <p>{this.state.omdbInfo.plot}</p>
                                        </dd>
                                        <dt className="col-sm-3">Runtime: </dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.runTime}</dd>
                                        <dt className="col-sm-3">Writers: </dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.writer}</dd>
                                        <dt className="col-sm-3">Actors: </dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.actors}</dd>
                                        <dt className="col-sm-3">Language: </dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.language}</dd>
                                        <dt className="col-sm-3">Year: </dt>
                                        <dd className="col-sm-9">{this.state.omdbInfo.year}</dd>

                                        <dt className="col-sm-3">Raitings</dt>
                                        <dd className="col-sm-9">
                                            <dl className="row">
                                            <dt className="col-sm-4">IMDB:</dt>
                                            <dd className="col-sm-8">{this.state.tmdbInfo.tmdbRaiting}</dd>
                                            </dl>
                                            <dl className="row">
                                            <dt className="col-sm-4">TMDB:</dt>
                                            <dd className="col-sm-8">{this.state.omdbInfo.imdbRating}</dd>
                                            </dl>
                                            <dl className="row">
                                            <dt className="col-sm-4">Rotten Tomatoes:</dt>
                                            <dd className="col-sm-8">{this.state.omdbInfo.rottenTomatoes}</dd>
                                            </dl>
                                            <dl className="row">
                                            <dt className="col-sm-4">Metacritic:</dt>
                                            <dd className="col-sm-8">{this.state.omdbInfo.metacritic}</dd>
                                            </dl>
                                        </dd>
                                    </dl>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className ="text-center mt-5 iframe-container">
                                        <h5>Trailer</h5>
                                    <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${this.state.tmdbInfo.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </Row>
                            </div>
                        </div>
            )
        }
        return (<div className="p-movie">
                {template}
            </div>)
    }
}
export default withRouter (Movie);


















