import React from "react";
import ImageCarusel from '../components/ImageCarusel'
import Gallery from '../components/Gallery'
import './Home.css'
import { API_KEY, TARANTINO_ID } from "../constants";
import { moviesToCards } from "../utils";
import Paginator from "../components/Paginator";
import { Container } from "react-bootstrap";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:[],
            pageNum:1,
            numOfPages :""
        };
    }

    componentDidMount = () => {

        // All this move to a function 
        this.getMovies(1);
    }
    getMovies = (page) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&with_people=${TARANTINO_ID}&with_watch_monetization_types=flatrate`)
        .then((res) => res.json())
        .then((tmdbData) => {
            const page = tmdbData.page
            const tmdbCards = moviesToCards (tmdbData.results)
            this.setState({
                cards: tmdbCards,
                numOfPages: tmdbData.total_pages
            })
        })
    }
    choosePage = (page) => {
        this.setState({
            pageNum: page
        })
        this.getMovies(page);

    }

    render() {
        return (
            <div className="p-home">
                <div className="jumbotron">
                <div class="header-text-wrapper">
                    <h1 className="display-4 mx-3">Quentin Tarantino</h1>
                    
                    <hr className="my-4" />
                    <p className="lead t-quote mx-3">I want to risk hitting my head on the ceiling of my talent. I want to really test it out and say: Ok you’re not that good. You just reached the level here. I don’t ever want to fail, but I want to risk failure every time out of the gate</p>
                    <img className="tarantino-img"src={process.env.PUBLIC_URL + "/t.png"} alt="Logo" />
                    </div>
                </div>
                <div className="float-me-right">
                

                </div>

                <Container>
                    <div className="custom-courusel">
                        <ImageCarusel />
                    </div>
                    <div className="custom-gallery">
                        <Gallery
                            cards={this.state.cards}
                        />
                    </div>
                    <div className="custom-paginator">
                        <Paginator
                        choosePage={this.choosePage}
                        currentPage={this.state.pageNum} 
                        numOfPages={this.state.numOfPages}
                        />
                    </div>  
                </Container>
            </div>

        )
    }
}


export default Home;