import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import MyAccount from './components/MyAccount';
import './App.css';

const App = () => (
<div className="gradient">

  <Navbar />
  <FetchUser>
    <Container>
    
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/myAccount" component={MyAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      
      </Switch>
    </Container>
  </FetchUser>
</div>
);





export default App;