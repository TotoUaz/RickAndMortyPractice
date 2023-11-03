import { useState, useEffect } from "react";
import axios from "axios";
import Episode from "../Episode/Episode";
import './ListOfEpisodes.css'




function ListOfEpisodes() {

    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/episode?page=1")
            .then((response) => {
                setEpisodes(response.data.results);
                setError(null);
            })
            .catch(setError);
    }, []);

    if (error) return <p>An error occurred</p>
    return (
        //Found out how to add a link to each episode, that will redirect into 
        // a dinamic page that will load the info and characters of the episodes
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