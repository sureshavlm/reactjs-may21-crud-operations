import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './component/Login';

import { 
  Link, 
  Route, 
  Switch,  
  BrowserRouter as Router } from 'react-router-dom';
import  TutorialComponent from './component/tutorial-component';




class App extends React.Component {

  constructor() {
    super();

    this.state = {
      token: ''
    }; //initial state;
  }

  onLoginSuccess = (token) => {
      this.setState({
        token: token
      });
  }

  render() {

    if(this.state.token === '') {
      return (
        <Login loginEvent = { this.onLoginSuccess }/>
      );
    }

    return(
      <Router>
        <div className = "container">
            <h3>Edureka</h3> 
            <Link to= "/">Tutorials</Link> |
            <Link to= { "/add" }>Add</Link> |
            <Link to= "/support">Support</Link> |
            <Link to= "/batches">My Batches</Link> |s
        </div>

        <Switch>
          <Route exact path = {["/", "/tutorials"]}
            component = { TutorialComponent }>
          </Route>
          <Route path = "/add" >

          </Route>
        </Switch>
      </Router>
    )
    
  }
  
}

export default App;
