
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { getDiscoveryAPI } from "../utils";

class ImageCarusel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topMovies: ""
        }
    }

    componentDidMount() {
        this.get5TopMovies()
    }

    get5TopMovies = () => {
        getDiscoveryAPI({ sort_by: "popularity.desc" }).then(movies => {
            const moviePosters = movies.results.filter(movie => movie.backdrop_path)
            const chosenMovies = []
            for (let index = 0; index < 5; index++) {
                chosenMovies.push(
                    this.createMovieCarouslItem(moviePosters[index])
                )
                this.setState({
                    topMovies: chosenMovies
                })
            }
        })
    }

    createMovieCarouslItem = (movie) => {
        return (<Carousel.Item>
            <img
                className="d-block images"
                src={`https://www.themoviedb.org/t/p/w1280${movie.backdrop_path}`}
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>)
    }
    render() {

        return (
            <Carousel>
                {this.state.topMovies}
            </Carousel>
        )


    }
}


export default ImageCarusel;