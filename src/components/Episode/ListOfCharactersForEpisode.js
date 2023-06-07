import { useEffect, useState } from "react";
import Character from "../Character/Character";
import axios from "axios";
function ListOfCharacterForEpisode({ characters }) {

    const [charFromEpisode, setCharFromEpisode] = useState([]);

    useEffect(() => {
        console.log(characters.length)
        console.log(characters);

    }, []);

    return (
        <div>
            Hola aqui van los characters images pasados
            al nuevo componente.
            {/* {characters.map(({ id, name, status, species, type, gender, image, location, origin }) => (
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
            ))} */}
        </div>
    );
}
export default ListOfCharacterForEpisode;