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

    //paginator 
    const { cards , cardsPerPages} = this.state

    const renderCard = cards.map((card, index) => {
        return <p key={index}>{card}</p>
    })
    
    //get current cards
    const indexOfLastCard = this.state.currentPage * cardsPerPages;
    const indexOfFirstCard = indexOfLastCard - cardsPerPages ;
    const currentCards = renderCard.slice(indexOfFirstCard, indexOfLastCard);
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
