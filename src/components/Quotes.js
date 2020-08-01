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
            inspirationalQuote1: "",
            firstAuthor: ""
        }
    }
// function for quotes deemed inspiration
    async getInspirationalQuote(){
        const result = await axios.get("https://type.fit/api/quotes")
        //fetches quote from api
        const quoteOne = result.data[3].text;
        const authorOne = result.data[3].author;
        this.setState({
            inspirationalQuote1: quoteOne,
            firstAuthor: authorOne 

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
                <p> - {this.state.firstAuthor}</p>
            </div>
        )
    }
}

export default Quotes;