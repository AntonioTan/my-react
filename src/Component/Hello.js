import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
    }
    state = {hello: "Hello"  }
    render() { 
        return (<div>
            {this.state.hello}
        </div>  );
    }
}
 
export default Hello;