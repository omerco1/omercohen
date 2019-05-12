import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div class="demo-big-content">
    <Layout >
        <div className="align-right"> 
            <Header Title="Omer" className="header-color" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    {/* <Link to="/aboutme">About Me</Link> */}
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
        </div>
        <Drawer title="Omer">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation> 
        </Drawer>
        <Content> 
            <Main />
        </Content>


    </Layout>
</div>
    );
  }
}

export default App;
