import React, { Component } from 'react'
import axios from 'axios';


// * Pseudo code 
 
// * This file will include code to display famous quotes to inspire writers
// * First access the api and fetch its data using async functions
// * display it for the user in an oragnized/filtered manner

class Quotes extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstQuote: ""
        }
    }

    async getFirstQuote(){
        const result = await axios.get("https://type.fit/api/quotes")
        //fetches quote from api
        const quoteOne = result.data.born;

        this.setState({
            
        })

    }
    render() {
        return (
            <div>
                <h1> Quotes</h1>
            </div>
        )
    }
}

export default Quotes;