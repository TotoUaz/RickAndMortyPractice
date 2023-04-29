import './Locations.css';
export default function Episode(
    {
        id = 1,
        name = "Earth",
        type = "Space station",
        dimmension = "unknown",
        residents =
        {
            url: "https://rickandmortyapi.com/api/character/1",
        },
        url = "http:image",
        created = "Ayer"
    }) {
    return (
        <div key={id} className="cardLoc">
            <h1>{name}</h1>
            <p>Tipo: {type} </p>
            <p>Dimension: {dimmension} </p>
            <p>Fecha de creacion en la DB: {created}</p>
        </div>
    );
}

