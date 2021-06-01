import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// props:
// cards - array of MovieCard element
export default class Gallery extends React.Component {
    render() {
        const cards = this.props.cards.map(x => <div style={{margin:"20px"}}>{x}</div>);
        return (
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
                {cards}
            </div>
        )
    }
}