
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
        getDiscoveryAPI({ sort_by: "popularity" }).then(movies => {
           const moviePosters = movies.results.filter(movie=> movie.backdrop_path)
            const chosenMovies = []
            for (let index = 0; index < 5; index++) {
                console.log("results", movies.results[index].backdrop_path)
                chosenMovies.push(
                    <Carousel.Item>
                        <img 
                            className="d-block images"
                            src={`https://www.themoviedb.org/t/p/w500${moviePosters[index].backdrop_path}`}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{moviePosters[index].title}</h3>
                            <p>{moviePosters[index].overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                )
                this.setState({
                    topMovies: chosenMovies
                })
            }
        })
    }

    render() {

        return (
            <Container>
                <Carousel>
                    {this.state.topMovies}
                </Carousel>
            </Container>
        )


    }
}


export default ImageCarusel;