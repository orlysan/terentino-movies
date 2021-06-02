import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AdvancedSearch from './pages/AdvancedSearch';
import Highest from './pages/Highest';
import Movie from './pages/Movie';
import NewestMovies from './pages/NewestMovies';
import SearchResult from './pages/SearchResult';
import { HashRouter, Route } from 'react-router-dom';
import NavbarMovies from './components/NavbarMovies';
import ImageCarusel from './components/ImageCarusel';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <ImageCarusel>

        </ImageCarusel>
    }
}

export default App;
