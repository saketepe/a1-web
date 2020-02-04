import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import VehiclesList from './VehiclesList';

class App extends Component {
  render() {
    return (
      <div classnemae="container">
        <Header />
        <Navbar className="navbar navbar-default" />
        <hr />
        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/VehiclesList' render={() => (<VehiclesList />)} />
          <Route render={() => (<NotFound />)} />
        </Switch >

        <p>&nbsp;</p>
        <hr />
        <footer>
          <p>&copy; 2019, personal or organization name</p>
        </footer>
      </div>
    );
  }
}

/*
        <Route exact path='/Vehiclas/detail/:id' render={() => (<VehiclasDetail />)} />
        <Route exact path='/Vehicles/edit/:id' render={() => (<VehiclesEdit />)} />
        <Route exact path='/Vehicles/delete/:id' render={() => (<VehiclesDelete />)} />
        <Route exact path='/Vehicles/c reate' render={() => (<VehiclesCreate />)} /> 
*/
export default App;

// Function component for the top-of-view header
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <h2>Web Assignment 1</h2>
        <p>This app Will Create, Delete, Get one, Get all, and edit vehicles</p>
      </div>
    </div>
  );
}

//  Function component for a content area
const NotFound = () => {
  return (
    <div>
      <p>The requested resource was not found.</p>
      <p>&nbsp;</p>
    </div>
  );
}

// Function component for the navigation bar 
const Navbar = () => {
  return (
    
    <div className="container-fluid navbar-outline">
      <div className="navbar-header">
        <Link to='/' className='navbar-brand'>Home page</Link>
      </div>

      {/* <!-- All the navigation links are in the following div --> */}
      <div>
        <ul className="nav navbar-nav">
          <li>
            <Link to='/VehiclesList'>Vehiclas List</Link>
          </li>
          <li>
            <Link to='/tobemade'>Add New Vehiclas</Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

const Home = () => {
  return (
    <div>
      <p>This is the home page of the app.</p>
      <p>Click or tap an item on the nav menu.</p>
      <p>&nbsp;</p>
    </div>
  );
}
