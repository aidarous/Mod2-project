import React, { Component } from 'react'
import notebook from '../assets/notebook.jpg'




class Home extends Component {
    render() {
        return (
                <div>
                    <h1> Home</h1>
                    <img src={notebook} rounded />
                </div>
            
        );
    }
}

export default Home;