import React, { Component } from 'react'
import axios from 'axios';
//const BASE_URL = "https://type.fit/api/quotes"

// * Pseudo code 
 
// * This file will include code to display famous quotes to inspire writers
// * First access the api and fetch its data using async functions
// * display it for the user in an organized/filtered manner

class Quotes extends Component {
    constructor(props){
        super(props);

        this.state = {
            inspirationalQuote1: "",
            author1: "",
            inspirationalQuote2: "",
            author2: "",
            inspirationalQuote3: "",
            author3: ""
            
        }
    }
// function for quotes deemed inspiration
    async getInspirationalQuote(){
        const result = await axios.get("https://type.fit/api/quotes")
        //fetches quote from api
        const inspiQuoteOne = result.data[3].text;
        const authorOne = result.data[3].author;
        const inspiQuoteTwo = result.data[4].text;
        const authorTwo = result.data[4].author;
        const inspiQuoteThree = result.data[6].text;
        const authorThree = result.data[6].author;
        this.setState({
            inspirationalQuote1: inspiQuoteOne,
            author1: authorOne,
            inspirationalQuote2: inspiQuoteTwo,
            author2: authorTwo,
            inspirationalQuote3: inspiQuoteThree,  
            author3: authorThree

        })
    }
    componentDidMount () {
        this.getInspirationalQuote()
    }
    render() {
        return (
            <div>
                <h1> Quotes</h1>
                <h2>{this.state.inspirationalQuote1}   </h2>
                <p> - {this.state.author1}</p>
                
                <h2>{this.state.inspirationalQuote2}</h2>
                <p> - {this.state.author2}</p>
                <h2>{this.state.inspirationalQuote3}</h2>
                <p> - {this.state.author3}</p>
            </div>
        )
    }
}

export default Quotes;