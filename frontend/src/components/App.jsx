import React, { Component } from 'react'; // Corrected import
import { render } from "react-dom";
import Homepage from './Homepage';



 class App extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (<div>
            <Homepage />
            
        </div>
         );
    }
}

const appDiv = document.getElementById("app");
render(<App name="LoL"/>, appDiv);

export default App