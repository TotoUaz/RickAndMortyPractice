import { useState, useEffect } from "react";
import axios from "axios";
import Episode from "../Episode/Episode";
import './ListOfEpisodes.css'




function ListOfEpisodes() {

    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/episode")
            .then((response) => {
                setEpisodes(response.data.results);
                setError(null);
            })
            .catch(setError);
    }, []);

    if (error) return <p>An error occurred</p>
    return (

        <div className='wrapper'>
            {episodes.map(({ id, name, air_date, episode, characters, url, created }) => (
                < Episode
                    key={id}
                    id={id}
                    name={name}
                    air_date={air_date}
                    episode={episode}
                    characters={characters}
                    url={url}
                    created={created}
                />
            ))}
        </div>
    );
}

export default ListOfEpisodes;