import React, { Component } from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.png';
import Principal from '../../assets/principal.jpg';

import Dark from '../../assets/MyList/dark.jpg';
import TheWitcher from '../../assets/MyList/thewitcher.jpg';
import Vikings from '../../assets/MyList/vikings.jpg';
import Kingdom from '../../assets/MyList/kingdom.jpg';
import Hitlers from '../../assets/MyList/hitlers.jpg';
import VanHelsing from '../../assets/MyList/vanhelsing.jpg';
import Extraction from '../../assets/MyList/extraction.jpg';
import Twd from '../../assets/MyList/twd.jpg';


class Main extends Component {
    render() {
        return (
            <Container>
                <header>
                    <ul>
                        <li className="navBar"><img src={Logo} alt="Logo" /></li>
                        <li className="navBar">Home</li>
                        <li className="navBar">TV Shows</li>
                        <li className="navBar">Movies</li>
                        <li className="navBar">Latest</li>
                        <li className="navBar">My List</li>
                    </ul>
                </header>

                
                <div className="mainContent">
                    <ul id="1">
                        <li className="mainImage"><img src={Dark} alt="content" /></li>
                        <li className="mainImage"><img src={TheWitcher} alt="content" /></li>
                        <li className="mainImage"><img src={Vikings} alt="content" /></li>
                        <li className="mainImage"><img src={Kingdom} alt="content" /></li>
                        <li className="mainImage"><img src={Hitlers} alt="content" /></li>
                    </ul>

                    <ul id="2">
                        <li className="mainImage"><img src={VanHelsing} alt="content" /></li>
                        <li className="mainImage"><img src={Extraction} alt="content" /></li>
                        <li className="mainImage"><img src={Twd} alt="content" /></li>
                    </ul>
                </div>
            </Container>
        )
    }
}

export default Main;