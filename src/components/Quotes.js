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
            author3: "",
            

            feelsQuote1: "",
            feelsAuthor1: "",
            feelsQuote2: "",
            feelsAuthor2: "",

            
            
        }
    }
    
// function for quotes deemed inspiration
    async getInspiration(){
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
    async getFeels() {
        const result = await axios.get("https://type.fit/api/quotes")
        const feelsQuoteOne = result.data[12].text;
        const feelsAuthorOne = result.data[12].author
        const feelsQuoteTwo = result.data[45].text;
        const feelsAuthorTwo = result.data[45].author
        const feelsQuoteThree = result.data[56].text;
        const feelsAuthorThree = result.data[56].author

       

        this.setState({
            feelsQuote1: feelsQuoteOne,
            feelsAuthor1: feelsAuthorOne,
            feelsQuote2: feelsQuoteTwo,
            feelsAuthor2: feelsAuthorTwo,
            feelsQuote3: feelsQuoteThree,
            feelsAuthor3: feelsAuthorThree
        
        })
    }
 
    componentDidMount () {
        this.getInspiration()
        this.getFeels()
       
    }
    render() {
        return (
            <div>
                <h1> Inspirational </h1>
                <h2>{this.state.inspirationalQuote1}   </h2>
                <p> - {this.state.author1}</p>
                
                <h2>{this.state.inspirationalQuote2}</h2>
                <p> - {this.state.author2}</p>
                <h2>{this.state.inspirationalQuote3}</h2>
                <p> - {this.state.author3}</p>
                <h1> Right in the feels</h1>
                 <h2>{this.state.feelsQuote1} </h2>
                 <p> - {this.state.feelsAuthor1} </p> 
                 <h2>{this.state.feelsQuote2} </h2>
                 <p> - {this.state.feelsAuthor2} </p> 
                 <h2>{this.state.feelsQuote3} </h2>
                 <p> - {this.state.feelsAuthor3} </p> 
            </div>
        )
    }
}

export default Quotes;