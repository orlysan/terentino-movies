import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { API_KEY, TARANTINO_ID } from '../constants';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resultTMDB: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/person/${TARANTINO_ID}/movie_credits?api_key=${API_KEY}`)
            .then((stream) => stream.json())
            .then((res) => {
                console.log(res.crew)
                if (res && res.crew) {
                    console.log("res.crew", res.crew)
                    const results = []
                    res.crew.map(movie => {
                        console.log("movie.original_title", movie.original_title)
                        if (!results.find(res => res.original_title === movie.original_title)) {
                            results.push(movie)
                        }
                        console.log("results", results)
                    })
                    const filterdResults = results.map(movie => {
                        return {
                            name: movie.original_title,
                            id: movie.id,
                            poster: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,
                            release_date: movie.release_date
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
        const filterMovies = list.map(movie => {
            console.log("movie", movie.name);
            return (<ListGroup.Item
                action key={movie.id}
                onClick={() => { this.props.onResultSelected(movie.id) }}
            >{movie.name}</ListGroup.Item>)
        })

        this.setState({
            filterMovies: filterMovies
        })
    }

    render() {
        console.log("state", this.state)

        return (
            <Form.Group>
                <Form.Control
                    type="text"
                    value={this.state.search}
                    placeholder="Search for a movie"
                    onChange={(e) => { this.onSearchChanged(e.target.value) }} />
                <ListGroup>
                    {this.state.filterMovies}
                </ListGroup>
            </Form.Group>
        )
    }
}
export default Search