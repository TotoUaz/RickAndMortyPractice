import './App.css';
import Navbar from './components/Navbar/Navbar';
import ListOfCharacters from './components/ListOfCharacters/ListOfCharacters';
import ListOfEpisodes from './components/ListOfEpisodes/ListOfEpisodes';

function App() {
  return (
    <div className='container'>
      <Navbar />
      {/* <ListOfCharacters /> */}
      <ListOfEpisodes />

    </div>
  );
}

export default App;
