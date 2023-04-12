import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/ListOfCharacters/ListOfCharacters';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
