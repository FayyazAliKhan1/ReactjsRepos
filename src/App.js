import React, {Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import Signin from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/project/CreateProject';
class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch >
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/project/:id' component={ProjectDetails}/>
                        <Route path='/signin' component={Signin}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/create' component={CreateProject} />
                    </Switch>
                    
                </div>
            
            </BrowserRouter>
        );
    }
}; export default App;