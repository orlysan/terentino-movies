import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AdvancedSearch from './pages/AdvancedSearch';
import Movie from './pages/Movie';
import { HashRouter, Route } from 'react-router-dom';
import NavbarMovies from './components/NavbarMovies';
import ScrollToTop from './components/ScrollToTops';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 
  render(){
        return (
            <HashRouter>
                <ScrollToTop/>
                <NavbarMovies />
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/about">
                    <About></About>
                </Route>
                <Route exact path="/advanced-search">
                    <AdvancedSearch></AdvancedSearch>
                </Route>
                <Route exact path="/movie/:id">
                    <Movie></Movie>
                </Route>
            </HashRouter>
        )
    }
}

export default App;
