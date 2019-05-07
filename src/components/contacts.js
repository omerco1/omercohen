import React, { Component } from 'react';
import '../../src/styleSheets/contacts.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <div className="contact-grid"> 
            <h2> Contact Information </h2>
            <hr/>  
            <hr id="lower-contacts-hr"/>  
            <div className="lower-container"> 
                <div className="img-container-contacts">
                        <img
                            id="avatar-contacts"
                            className="" 
                            src={require('../images/avatar.png')}
                        /> 
                </div>

                <div className="grid-container"> 
                    <Grid > 
                        <Cell col={6}>
                            <div className="contact-list">
                                
                                <List>
                                <h1 style={{fontFamily: 'Roboto', margin: 'auto', paddingRight: '135px', fontSize: '60px'}}> Omer Cohen </h1>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '60px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            
                                        </ListItemContent>
                                       <p style={{fontSize: '35px', paddingRight: '120px', paddingTop: '7px'}}> (619)-991-9097 </p>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemContent style={{fontSize: '55px', fontFamily: 'Anton', paddingRight: '25px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        
                                    </ListItemContent>
                                        <p style={{fontSize: '35px',paddingTop: '10px'}}> omerc65 at gmail.com </p>
                                    </ListItem>
                                </List>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact;