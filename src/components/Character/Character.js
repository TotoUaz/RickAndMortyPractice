import './Character.css';
export default function Character({
    id = 1,
    name = "Rick",
    status = "Alive",
    species = "Stay hungry, stay foolish",
    type = "Human",
    gender = "Male",
    origin = {
        name: "Default",
        url: 'http://earth'
    },
    location =
    {
        name: "Default",
        url: 'http://earth'
    },
    image = "http:image",
    url = ""
}) {
    return (
        <div className="card">
            <div >
                <img className="card-img"
                    style={{ borderColor: status === 'Alive' ? '#689775' : status === 'Dead' ? '#a33327' : '#917164' }}
                    src={image} alt="imagen" />
            </div>
            <div className="card-info">
                <p className="text-body">{name}, {type},  {gender}<br />   Status: {status} <br />
                    Species: {species}.<br /> Location of origin:{origin.name},<br /> Last known location:{location.name} </p>
            </div>
        </div>


    );
}
