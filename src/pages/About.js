import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import './About.css'

class About extends React.Component{
    render() {
        return (
            <Container className="p-about">
                <Jumbotron className="about-jumbo">
                    <h1>Quentin Tarantino</h1>
                    <p className="lead">Writer, Actor and Producer</p>
                    <hr class="my-4"></hr>
                </Jumbotron>
                <main>
                    <p>Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old.</p>
                    <p>In January of 1992, first-time writer-director Tarantino's Calbay Ashmoret (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately. Two years later, he followed up Dogs success with Sifrut Zolla (1994) which premiered at the Cannes film festival, winning the coveted Palme D'Or Award. At the 1995 Academy Awards, it was nominated for the best picture, best director and best original screenplay. Tarantino and writing partner Roger Avary came away with the award only for best original screenplay. In 1995, Tarantino directed one fourth of the anthology Araba'a Hadarim (1995) with friends and fellow auteurs Alexandre Rockwell, Robert Rodriguez and Allison Anders. The film opened December 25 in the United States to very weak reviews. Tarantino's next film was From Dusk Till Dawn (1996), a vampire/crime story which he wrote and co-starred with George Clooney. The film did fairly well theatrically.</p>
                    <p>Since then, Tarantino has helmed several critically and financially successful films, including Jackie Brown (1997), Kill Bill: Vol. 1 (2003), Kill Bill: Vol. 2 (2004), Mamzerim Chasere Kavod (2009), Django Lelo Ma'atzorim (2012) and Shmonat ha'snou'im (2015).</p>
                </main>
                <Row className="gallery-qt">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_.jpg"></img>
                    <img src="https://www.madametussauds.com/wien/media/kjpavjjg/quentin-tarantino2-min.jpg"></img>
                    <img src="https://www.dailysquat.com/wp-content/uploads/2021/04/quentin-tarantino-athletes-mouth.jpg"></img>
                    <img src="https://s.studiobinder.com/wp-content/uploads/2019/09/Quentin-Tarantinos-Star-Trek-Featured-StudioBinder.jpg"></img>
                    <img src="https://consequence.net/wp-content/uploads/2019/07/quentin-tarantino-lines.png"></img>
                    <img src="https://www.jpost.com//HttpHandlers/ShowImage.ashx?id=387175&w=640&h=428"></img>
                </Row>
                <Row className="more-info justify-content-center">
                    <Col><a href="https://en.wikipedia.org/wiki/Quentin_Tarantino" target="_blank">Wikipedia</a>
                    </Col>
                    <Col><a href="https://www.imdb.com/name/nm0000233/" target="_blank">QT at IMDb</a>
                    </Col>
                    <Col><a href="https://www.rottentomatoes.com/celebrity/quentin_tarantino" target="_blank">QT at Rotten Tomatoes</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;