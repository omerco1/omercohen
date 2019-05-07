import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import '/Users/omercohen/Desktop/myportfolio/src/styleSheets/landingpage.css';

class Landing extends Component { 

    render() {
       return (
        <div style={{width: '100%'}}>
            <div className="landing-grid"> 
             {/* <Grid className="landing-grid">
                <Cell col={12}>  */}
                    <div className="myavatar"> 
                        <img 
                            id="my-img-avatar"
                            src={require('../images/avatar.png')}
                            alt="avatar"
                            className="avatar-img"
                        />
                    
                        <Link to="/aboutme" className="no-hyperlink">
                            <div className="about-me-button disable-select" id="about-me-button-id"> 
                                About me
                                </div>
                        </Link>
                    </div>
                    <div className="banner-text"> 
                        <h1> Omer Cohen </h1> 
                        <h3>  B.S. Computer Science - UCSB </h3>
                        <hr/>
                        <p> HTML/CSS | Bootstrap | Javascript | React Native | NodeJS | MySql </p>
                            <div className="social-links"> 
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/omercohen5/" rel="noopener noreferrer" target="_blank"> 
                                    <i id="linked" className="fa fa-linkedin-square" aria-hidden="true" />   
                                </a>
                    
                                {/* Github */}
                                <a href="https://github.com/omerco1" rel="noopener noreferrer" target="_blank"> 
                                    <i id="git" className="fa fa-github-square" aria-hidden="true" />   
                                </a>
                        </div>
                    </div>
             </div>
        </div>
       );
    }

}   

export default Landing; 