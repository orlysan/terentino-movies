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


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
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
    </HashRouter>
  }
}

export default App;
