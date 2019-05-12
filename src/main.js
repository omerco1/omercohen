import React from 'react';
import { Switch, Route  } from 'react-router-dom'; 
import LandingPage from './components/landingpage';
import Contacts from './components/contacts';
import About from './components/aboutme';
import Project from './components/projects';
import Resume from './components/resume';

class Main extends React.Component { 

    render() { 
        return(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/contact" component={Contacts}/>
        <Route exact path="/aboutme" component={About}/>
        <Route exact path="/projects" component={Project}/>
        <Route exact path="/resume" component={Resume}/>x
    </Switch>
    );
    }
}

export default Main; 