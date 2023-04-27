import { useState } from 'react';
import ListOfCharacters from '../ListOfCharacters/ListOfCharacters';
import ListOfEpisodes from '../ListOfEpisodes/ListOfEpisodes';
import './Navbar.css';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Navbar() {

    const [responsive, setResponsive] = useState("nav-links");

    const update = () => {
        responsive === 'nav-links' ?
            setResponsive('nav-links responsive') :
            setResponsive('nav-links');
    };

    return (
        <div>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                        Rick And Morty
                    </div>
                </div>
                <a className='creator' href="https://github.com/TotoUaz">By Toto</a>

                <div className={responsive}>
                    <Link to="/">Characters</Link>
                    <Link to="/Episodes">Episodes</Link>
                    <Link to="/Locations">Locations</Link>
                    <a className='icon' onClick={update}>Menu</a>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={< ListOfCharacters />}></Route>
                <Route exact path='/Episodes' element={< ListOfEpisodes />}></Route>
                {/* <Route exact path='/Locations' element={< Contact />}></Route> */}
            </Routes>
        </div>
    );
}

export default Navbar;