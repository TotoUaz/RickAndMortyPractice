import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <FrontPage />
      </div>
    </Router>
  );
}

export default App;
