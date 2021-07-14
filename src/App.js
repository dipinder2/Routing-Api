import './App.css';
import {Router,Link} from '@reach/router'
import Home from './components/Home'
import Param from './components/Param'
import Multiple from './components/Multiple'
function App() {
  return (
    <div className="App">
      <Link to="/Home">Home</Link>
      <Router>
          <Home path="/Home" />
          <Param path="/:param" />
          <Multiple path="/:word/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
