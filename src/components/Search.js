import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { API_KEY, TARANTINO_ID, TARANTINO_IMAGE } from '../constants';
import { withRouter } from "react-router";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resultTMDB: [],
            filteredMovies: ""
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/person/${TARANTINO_ID}/movie_credits?api_key=${API_KEY}`)
            .then((stream) => stream.json())
            .then((res) => {
                if (res && res.crew) {
                    const moviesFound = {}
                    const results = res.crew.filter(movie => {
                        if (moviesFound[movie.original_title]) {
                            return false
                        }
                        else {
                            moviesFound[movie.original_title] = true;
                            return true
                        }
                    })
                    const filterdResults = results.map(movie => {
                        return {
                            name: movie.original_title,
                            id: movie.id,
                            poster: movie.poster_path,
                            release_date: movie.release_date,
                            popularity: movie.popularity

                        }
                    })
                    this.setState(
                        {
                            resultTMDB: filterdResults,
                        }
                    )
                }
            })
    }

    onSearchChanged = (filter) => {
        const list = this.state.resultTMDB.filter(movie => {
            return movie.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        })
        const filteredMovies = list.map(movie => {
            let poster;
            if (!movie.poster) {
                poster = TARANTINO_IMAGE
            } else {
                poster = `https://www.themoviedb.org/t/p/w500${movie.poster}`
            }

            return (<ListGroup.Item
                action key={movie.id}
                onClick={() => { this.onResultSelected(movie.id, movie.name) }}>
                <div className="movie-tab">
                    <img className="image-tab" src={poster} height="60px" />
                    <div className="movie-name-tab">{movie.name}</div>
                </div>
            </ListGroup.Item>)
        })

        this.setState({
            filteredMovies: filteredMovies
        })
    }

    onResultSelected = (id, name) => {
        this.setState({
            name: name,
            filteredMovies: ""
        })
        window.location.href = `#movie/${id}`
    }

    render() {
        return (
            <Form.Group>
                <Form.Control
                    type="text"
                    value={this.state.name}
                    placeholder="Search for a movie"
                    onChange={(e) => { this.onSearchChanged(e.target.value) }} />
                <ListGroup className="movies-search">
                    {this.state.filteredMovies}
                </ListGroup>
            </Form.Group>
        )
    }

}
export default withRouter(Search)
