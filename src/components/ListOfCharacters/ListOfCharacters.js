import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Character/Character';
import './ListOfCharacters.css'

function ListOfCharacters() {
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

    if (error) return <p className='error' >An error occurred! </p>
    return (

        <div className='wrapper1'>
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
                />
            ))}
        </div>
    );
}

export default ListOfCharacters;

