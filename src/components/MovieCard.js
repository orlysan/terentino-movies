import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Link} from 'react-router-dom';
import './MovieCard.css';

//props: movDetails- object with the following fields: 
// movName- the name of the movie
// movRate - imdb rate
// movYear- year
// movLink - link address of the details
// movImgSrc- img src
// second props: object movStyle with following fields:
// height: pixels. default: 600px
// weight: pixels. default: 400px
// color: background color. default #c2d9ff
export default class MovieCard extends React.Component {
    render() {
        const height = this.props.movStyle.height || "600px";
        const width = this.props.movStyle.width || "400px";
        const color = this.props.movStyle.color || "#c2d9ff";
        const src = this.props.movDetails.movImgSrc;
        const name = this.props.movDetails.movName;
        const rate = this.props.movDetails.movRate;
        const year = this.props.movDetails.movYear;
        const link = this.props.movDetails.movLink;
        return (
            <div>
                <Flippy
                    flipOnHover={true} // default false
                    flipOnClick={false} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    className = "mov-card"
                    style={{height, width}}
                >
                    <FrontSide style={{height, width, backgroundColor: color}}>
                        <div style={{height: "90%"}}>
                            <img src={src} alt=""></img>
                        </div>
                        <p>
                            {name}
                        </p>
                        <div className="card-mov-info" style={{backgroundColor: color, left:"7px"}}>
                            {year}
                        </div>
                        <div className="card-mov-info" style={{backgroundColor: color, right:"7px"}}>
                            {`⭐${rate}`}
                        </div>
                    </FrontSide>
                    <BackSide
                    style={{height, width, backgroundColor: color}}
                    >
                        <div style={{height: "90%"}}>
                            <img src={src} alt="" style={{opacity: "0.6"}}></img>
                        </div>
                        <p>
                            {name}
                        </p>
                        <Link to={link}>
                        <button className="detailed-button" style={{backgroundColor: color}}>
                                Details
                                </button>
                        </Link>
                        
                    </BackSide>
                </Flippy>
            </div>
        )
    }
}