import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentDidMount() {
        
    }

    componentWillMount() {
        
    }


    render(){
        return (
            <div>
                <h1>Cars</h1>
            </div>
        );
    }
}


export default App;