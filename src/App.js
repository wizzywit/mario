import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard'
import ProjectDetails from './component/projects/ProjectDetails'
import CreateProject from './component/projects/CreateProject'
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
