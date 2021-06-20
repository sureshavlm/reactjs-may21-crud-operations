import React from "react";
import TutorialService from "../services/tutorial-service";

class TutorialComponent extends React.Component {
  
    constructor() {
        super();

        this.state = {
            tutorials: [],
            currentIndex : -1
        };
    }

    componentDidMount () {
        this.retrieveTutorials();
    }

    retrieveTutorials() {
        TutorialService.getAll()
            .then((response) => {
                console.log("****** Tutorials received *****", response.data);
                this.setState({
                    tutorials : response.data
                });
            })
            .catch((err) => {
                console.log(' ****** Error while retreving tutorials *****');
            });
    }

    setActiveTutorial = (index) => {
        this.setState({
            currentIndex: index
        });
    }

    render() {
        if(this.state.tutorials.length > 0)
        {
            return(
                <div className = "container-fluid">
                    <h4>Tutorial List</h4>
                    <div className = "list-group">
                    {
                        this.state.tutorials.map((tutorial, index) => {
                            return(  
                                <li onClick = { this.setActiveTutorial } className = { "list-group-item " + (index === this.state.currentIndex ? "active" : "") } key = { index }>
                                    { tutorial.name } - { tutorial.price }
                                </li>
                                )
                        })
                    }
                   </div>
                </div>
            ); 
        }
        
        return(
            <h1>No Tutorials found!</h1>
        );
        
        
    }
}

export default TutorialComponent;