import './Episode.css';
import ListOfCharacterForEpisode from './ListOfCharactersForEpisode';
export default function Episode(
    {
        id = 1,
        name = "Ep default",
        air_date = "Lunes",
        episode = "Taquitos voladores",
        characters =
        {
            url: "https://rickandmortyapi.com/api/character/1",
        },
        url = "http:image",
        created = "Ayer"
    }) {
    return (
        <div key={id} className="carta">

            <h1>{name}</h1>
            <div className='detalles'>
                <p> Episodio: {episode} </p>
                <p> Fecha en que salio al aire: {air_date} </p>
            </div>
        </div>
    );
}

