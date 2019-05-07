import React, { Component } from 'react';
import '/Users/omercohen/Desktop/myportfolio/src/styleSheets/projects.css';
import {Tab, Tabs, Card, CardTitle, CardActions, Button, IconButton, CardMenu, CardText } from 'react-mdl';

class Project extends Component { 

    constructor(props) { 
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCatagories() { 
        // REACT JS 
        if(this.state.activeTab == 0) {         
            let props0 = { 
                projDesc: "Developed my own Resume/Portfolio website using ReactJS with React-MDL" ,
                projURL: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover',
                projTitle: "Omer's Portfolio Website", 
                projTitleColor: 'black' 
            }
            let props1 = { 
                projDesc: "NovaSight is a realtime online security monitoring application that streamlines the process of managing your digital footprint. " ,
                projURL: 'url(https://github.com/gmfoster/Capstone/blob/master/novasight_front/src/images/ezgif-3-88d63871ccb9.gif?raw=true) center / cover',
                projTitle: "Novasite", 
                projTitleColor: 'white'
            }

            return(
                <div className="parent">
                    <div className="card-container"> 
                        <ProjCard {...props0} ></ProjCard>
                        <ProjCard {...props1} ></ProjCard>
                    </div>
                </div>
            );
        }
        // C / C++ 
        else if(this.state.activeTab == 1) { 
            let props0 = { 
                projDesc: "Developed my own Resume/Portfolio website using ReactJS with React-MDL" ,
                projURL: 'url(https://cdn-images-1.medium.com/max/1200/1*YU6BvZKvxivoEnvqxeG5rw.png) center / cover',
                projTitle: "Omer's Portfolio Website", 
                projTitleColor: 'Maroon', 
                liveVisibleClass: "hidden"
            }
            let props1 = { 
                projDesc: "NovaSight is a realtime online security monitoring application that streamlines the process of managing your digital footprint. " ,
                projURL: 'url(https://cdn-images-1.medium.com/max/1200/1*YU6BvZKvxivoEnvqxeG5rw.png) center / cover',
                projTitle: "Novasite", 
                projTitleColor: 'Maroon',
                liveVisibleClass: "hidden"
            }
            return(
                <div className="card-container"> 
                    <ProjCard {...props0} ></ProjCard>
                    <ProjCard {...props1} ></ProjCard> 
                    <ProjCard {...props1} ></ProjCard>  
                    <ProjCard {...props0} ></ProjCard>
                    <ProjCard {...props1} ></ProjCard> 
                    <ProjCard {...props1} ></ProjCard>  
                </div>
            );
        } 
        //PYTHON
        else if(this.state.activeTab == 2) { 
            let props0 = { 
                projDesc: "NovaSight is a realtime online security monitoring application that streamlines the process of managing your digital footprint. " ,
                projURL: 'url(https://www.younggates.com/uploads/1547662972python2.png) center / cover',
                projTitle: "Novasite", 
                projTitleColor: 'Maroon', 
                liveVisibleClass: "hidden"
            }

            return(
                <div> 
                    <ProjCard {...props0} ></ProjCard>
                </div>
            );
        }
        //JAVA
        else if(this.state.activeTab == 3) { 
            let props0 = { 
                projDesc: "Developed my own Resume/Portfolio website using ReactJS with React-MDL" ,
                projURL: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover',
                projTitle: "Omer's Portfolio Website", 
                projTitleColor: 'black' 
            }
            let props1 = { 
                projDesc: "NovaSight is a realtime online security monitoring application that streamlines the process of managing your digital footprint. " ,
                projURL: 'url(https://github.com/gmfoster/Capstone/blob/master/novasight_front/src/images/ezgif-3-88d63871ccb9.gif?raw=true) center / cover',
                projTitle: "Novasite", 
                projTitleColor: 'white'
            }

            return(
                <div className="container-java"> 
                    <div className="projHeader"> 
                        <h1> Andriod Projects </h1>
                    </div>
                    <div className="card-container"> 
                        <ProjCard {...props0} ></ProjCard>
                        <ProjCard {...props1} ></ProjCard> 
                        <ProjCard {...props1} ></ProjCard>  
                        <ProjCard {...props0} ></ProjCard>
                        <ProjCard {...props1} ></ProjCard> 
                        <ProjCard {...props1} ></ProjCard> 
                    </div>
                    <div className="projHeader"> 
                        <h1> JavaFX  Projects </h1>
                    </div>
                    <div className="card-container"> 
                        <ProjCard {...props0} ></ProjCard>
                        <ProjCard {...props1} ></ProjCard> 
                        <ProjCard {...props1} ></ProjCard>  
                    </div>
                    <div className="projHeader"> 
                        <h1> Java  Projects </h1>
                    </div>
                    <div className="card-container"> 
                        <ProjCard {...props0} ></ProjCard>
                        <ProjCard {...props1} ></ProjCard> 
                        <ProjCard {...props1} ></ProjCard>  
                    </div>
                </div> 
            );
        } 
    }

    render() {
        return (
        <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab> ReactJS </Tab> 
                <Tab> C / C++ </Tab> 
                <Tab> Python </Tab>
                <Tab> Java </Tab>

            </Tabs>

            <section className="projects-grid"> 
                {this.toggleCatagories()}
            </section>
            </div>
        ); 
    }

}

const ProjCard = (props) => (
        
        <Card className="card-class" shadow={2}> 
            <CardTitle style={{color: props.projTitleColor, height: '176px', background: props.projURL }}> 
                { props.projTitle}
            </CardTitle>
            <CardText>
                { props.projDesc }
            </CardText>
            <CardActions border> 
                <Button colored> Github </Button>
                <Button className={props.liveVisibleClass} colored> Live Demo </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}> 
                <IconButton name="share" style={{color: '#0'}}/> 
            </CardMenu>
        </Card>
    
); 


export default Project; 
