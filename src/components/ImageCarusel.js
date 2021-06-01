
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
            console.log(movies)
            const chosenMovies = []
            for (let index = 0; index < 5; index++) {
                console.log("results", movies.results[index])
                chosenMovies.push(
                    <Carousel.Item>
                        <img 
                            className="d-block images"
                            src={`https://www.themoviedb.org/t/p/w500${movies.results[index].backdrop_path}`}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>{movies.results[index].title}</h3>
                            <p>{movies.results[index].overview}</p>
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
                <Carousel className="w-80 h-40">
                    {this.state.topMovies}
                </Carousel>
            </Container>
        )


    }
}


export default ImageCarusel;