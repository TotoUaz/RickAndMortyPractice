import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../Character/Character';
import './ListOfCharacters.css'
import Pagination from '../Pagination/Paginations';

function ListOfCharacters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character?page=" + page)
            .then((response) => {
                setCharacters(response.data.results);
                setInfo(response.data.info);
                setError(null);
            })
            .catch(setError);
    }, [page]);

    const nextPage = () => {
        if (page !== info.pages) {
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    }

    if (error) return <p className='error' >An error occurred! </p>
    return (

        <div >
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
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} pageNum={info.pages} />
        </div>
    );
}

export default ListOfCharacters;

