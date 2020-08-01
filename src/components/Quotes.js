import React, { Component } from 'react'
import axios from 'axios';
//const BASE_URL = "https://type.fit/api/quotes"

// * Pseudo code 
 
// * This file will include code to display famous quotes to inspire writers
// * First access the api and fetch its data using async functions
// * display it for the user in an oragnized/filtered manner

class Quotes extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstQuote: "",
            firstAuthor: ""
        }
    }

    async getFirstQuote(){
        const result = await axios.get("https://type.fit/api/quotes")
        //fetches quote from api
        const quoteOne = result.data[0].text;
        const authorOne = result.data[0].author;
        this.setState({
            firstQuote: quoteOne,
            firstAuthor: authorOne 

        })
    }
    componentDidMount () {
        this.getFirstQuote()
    }
    render() {
        return (
            <div>
                <h1> Quotes</h1>
                <h2>{this.state.firstQuote}   </h2>
                <p> - {this.state.firstAuthor}</p>
            </div>
        )
    }
}

export default Quotes;