import React, { Component } from 'react'
import axios from 'axios';



// * Pseudo code 
 
// * This file will include code to display famous quotes to inspire writers
// * First access the api and fetch its data using async functions
// * display it for the user in an organized/filtered manner

class Quotes extends Component {
    constructor(props){
        super(props);

        this.state = { 
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
    async getAction() {
        const result = await axios.get("https://type.fit/api/quotes")

        const actionQuoteOne = result.data[11].text
        const actionAuthorOne = result.data[11].author
        const actionQuoteTwo = result.data[29].text
        const actionAuthorTwo = result.data[29].author
        const actionQuoteThree = result.data[30].text
        const actionAuthorThree = result.data[30].author
        this.setState({
            actionQuote1: actionQuoteOne,
            actionAuthor1: actionAuthorOne,
            actionQuote2: actionQuoteTwo,
            actionAuthor2: actionAuthorTwo,
            actionQuote3: actionQuoteThree,
            actionAuthor3: actionAuthorThree,
        })
    }

    async getWisdom() {
        const result = await axios.get("https://type.fit/api/quotes")
        const wisdomQuoteOne = result.data[10].text;
        const wisdomAuthorOne = result.data[10].author;
        const wisdomQuoteTwo = result.data[15].text;
        const wisdomAuthorTwo = result.data[15].author;
        const wisdomQuoteThree = result.data[17].text;
        const wisdomAuthorThree = result.data[17].author;
        this.setState({
            wisdomQuote1: wisdomQuoteOne,
            wisdomAuthor1: wisdomAuthorOne,
            wisdomQuote2: wisdomQuoteTwo,
            wisdomAuthor2: wisdomAuthorTwo,
            wisdomQuote3: wisdomQuoteThree, //unknown author
            wisdomAuthor3: wisdomAuthorThree // null because author is unknown
            
        })
    }
    componentDidMount () {
        this.getInspiration()
        this.getFeels()
        this.getAction()
        this.getWisdom()
       
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

                 <h1> Take Action</h1>
                 <h2>{this.state.actionQuote1}</h2>
                 <p> - {this.state.actionAuthor1}</p> 
                 <h2>{this.state.actionQuote2}</h2>
                 <p> - {this.state.actionAuthor2}</p> 
                 <h2>{this.state.actionQuote3}</h2>
                 <p> - {this.state.actionAuthor3}</p> 

                 <h1>Wisdom</h1>
                 <h2>{this.state.wisdomQuote1}</h2>
                 <p> - {this.state.wisdomAuthor1}</p>
                 <h2>{this.state.wisdomQuote2}</h2>
                 <p> - Unknown </p>
                 <h2>{this.state.wisdomQuote3}</h2>
                 <p> -  Uknown </p>

            </div>
        )
    }
}

export default Quotes;