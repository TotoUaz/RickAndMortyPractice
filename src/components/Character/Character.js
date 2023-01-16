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
        <div class="card">
            <div >
                <img class="card-img"
                    style={{ borderColor: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '#42caff' }}
                    src={image} alt="imagen" />
            </div>
            <div class="card-info">
                <p class="text-body">{name}, {type},  {gender}<br />   Status: {status} <br />
                    Species: {species}.<br /> Location of origin:{origin.name},<br /> Last known location:{location.name} </p>
            </div>
        </div>


    );
}


// id={id}
// name={name}
// status={status}
// species={species}
// type={type}
// gender={gender}
// image={image}
// url={url}