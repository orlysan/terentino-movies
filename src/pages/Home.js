import React from "react";
import ImageCarusel from '../components/ImageCarusel'
import Gallery from '../components/Gallery'
import './Home.css'
import { API_KEY, TARANTINO_ID } from "../constants";
import { moviesToCards } from "../utils";

    //         const src = this.props.movDetails.movImgSrc;
    //         const name = this.props.movDetails.movName;
    //         const rate = this.props.movDetails.movRate;
    //         const year = this.props.movDetails.movYear;
    //         const link = this.props.movDetails.movLink;
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards:[],
            pageNum:1,
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
                
            })
        })
    }
    changePage = (page) => {
        this.setState({
            pageNum: page
        })
        this.getMovies(page);

    }
    render() {
        return (
            <div className="p-home">
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>  
                </div>
                <div className="custom-courusel">
                    {/* <ImageCarusel/> */}
                </div>
                <div className="custom-gallery">
                    <Gallery
                     cards={this.state.cards}
                    />
                </div>
                <div className="custom-paginator">
                    PAGINETOR
                </div>           
            </div>
        )
    }
}


export default Home;