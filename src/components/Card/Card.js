import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Character/Character';
import './Card.css';
function Card() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
                setError(null);
            })
            .catch(setError);
    }, []);

    if (error) return <p>An error occurred</p>
    return (

        <div className='wrapper'>
            {characters.map(({ id, name, status, species, type, gender, image, location, origin }) => (
                < Character
                    key={id}
                    name={name}
                    status={status}
                    species={species}
                    type={type}
                    gender={gender}
                    image={image}
                    location={location}
                    origin={origin}
                    className="item-card"
                />
            ))}
        </div>
    );
}

export default Card;

