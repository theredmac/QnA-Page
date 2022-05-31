// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Blogdetails from './Blogdetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>
          <Route exact path= "/blogs/:id">
            <Blogdetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
