import logo from './logo.svg';
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
import { HashRouter, Route} from 'react-router-dom';
import NavbarMovies from './components/NavbarMovies';
import Paginator from './components/Paginator';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
            currentPage : 1,
            cardsPerPages : 10
    }
  }

  //change page - should be in paginator pages
//   choosePage = (page) => {
//     this.setState({
//         currentPage: page,
//     })
//     }

   
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

    
  return   <HashRouter>
        
      <NavbarMovies />
      
      <Route exact path = "/">
          <Home></Home>
      </Route>
      <Route exact path = "/about">
          <About></About>
      </Route>
      <Route exact path = "/advanced-search">
          <AdvancedSearch></AdvancedSearch>
      </Route>
      <Route exact path = "/highest">
          <Highest></Highest>
      </Route>
      <Route exact path = "/movie">
          <Movie></Movie>
      </Route>
      <Route exact path = "/newest-movies">
          <NewestMovies></NewestMovies>
      </Route>
      <Route exact path = "/search-result">
          <SearchResult></SearchResult>
      </Route>
      {/* {currentCards} */}
      <Paginator 
            numOfPages ={Math.ceil(this.state.cards.length / this.state.cardsPerPages)}
            currentPage = {this.state.currentPage}
            choosePage = {this.choosePage}
      />
    </HashRouter>
  }
}

export default App;
