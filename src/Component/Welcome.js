import React, { Component } from 'react';

class Welcome extends Component {

    
    constructor() {
        super();
        this.state = { 
            welcome: "Welcome"
        };
        this.changeContent = this.changeContent.bind(this);
    } 
    changeContent() {
        this.setState((prevState, props)=>{
            return {welcome: "Welcome Tianyi Tan"};
        }, ()=>{
            console.log(this.state.welcome);
        });
    }
    render() { 
        // const {welcome} = this.state;
        return (
            <div> 
                {this.state.welcome}
                <button onClick={this.changeContent}>
                    Change
                </button>
            </div>
        );
    }
}
 
export default Welcome;