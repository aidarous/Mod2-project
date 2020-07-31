import React, { Component } from 'react'
import axios from 'axios';
const BASE_URL = "https://type.fit/api/quotes"

// * Pseudo code 
 
// * This file will include code to display famous quotes to inspire writers
// * First access the api and fetch its data using async functions
// * display it for the user in an oragnized/filtered manner

class Quotes extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    // async getFirstQuote(){
    //     const result = await axios.get("https://type.fit/api/quotes")
    //     //fetches quote from api
    //     const quoteOne = result.data;

    //     this.setState({
    //         firstQuote: quoteOne 
    //     })
    // }
    componentDidMount () {
        axios.get(`${BASE_URL}`)
        .then(result => this.setState({ info: result.data.text}))
        .catch(e => console.error(e.message));
    }
    render() {
        return (
            <div>
                <h1> Quotes</h1>
                <h2>  </h2>
            </div>
        )
    }
}

export default Quotes;