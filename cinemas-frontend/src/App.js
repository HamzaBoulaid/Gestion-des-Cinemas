import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home';


function App() {
    return (
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
              <li>
                <Link className="navbar-brand" to="/home">Cinema Hub</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="">Contact US</Link>
              </li>
              <li>
                <Link className="nav-link" to="">About</Link>
              </li>
            </ul>
          </nav>
          <div className="m-2 mt-4">
            <Switch>
              <Route path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
            </Switch>
          </div>
          <footer>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="nav navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="">Made with love by Hamza Boulaid - GLSID2</Link>
              </li>
            </ul>
          </nav>
          </footer>
        </Router>
    );
}

export default App;
