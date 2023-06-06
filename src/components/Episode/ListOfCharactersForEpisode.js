function ListOfCharacterForEpisode({ characters }) {

    //Have to check how I am going to manage it, because
    //I have a list of urls each for a single character,
    //So I will have to make a call for every single one of 
    // the characters, maybe what I can do is use this class
    // as the list, or grid, this component will only organize
    //the images with its names, and I can maybe create a new
    //component where it will make the call to the api
    // format the image and return the value. I can 
    // use several of those components to create the list.

    return (
        <div>
            Hola aqui van los characters images pasados
            al nuevo componente.
            <p>{characters}</p>
        </div>

    );
}
export default ListOfCharacterForEpisode;