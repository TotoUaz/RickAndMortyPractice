import { useState, useEffect } from "react";
import axios from "axios";
import Locations from "../Locations/Locations";
import './ListOfLocations.css'

function ListOfLocations() {

    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/location")
            .then((response) => {
                setLocations(response.data.results);
                setError(null);
            })
            .catch(setError);
    }, []);

    if (error) return <p>An error occurred</p>
    return (
        <div className='wrapper3'>
            {locations.map(({ id, name, type, dimension, residents, url, created }) => (
                < Locations
                    key={id}
                    id={id}
                    name={name}
                    type={type}
                    dimension={dimension}
                    residents={residents}
                    url={url}
                    created={created}
                />
            ))}
        </div>
    );
}

export default ListOfLocations;