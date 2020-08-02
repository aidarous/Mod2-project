import React, { Component } from 'react'
import axios from 'axios';

// Pseudo code
/* */
class Jokes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    async getJokes() {
            const result = await axios.get("https://official-joke-api.appspot.com/random_ten")
            const randomSetup = result.data[0].setup
            const punchlineOne = result.data[0].punchline
            const randomSetupTwo = result.data[1].setup
            const punchlineTwo = result.data[1].punchline
            const randomSetupThree = result.data[2].setup
            const punchlineThree = result.data[2].punchline
            const randomSetupFour = result.data[3].setup
            const punchlineFour = result.data[3].punchline
            const randomSetupFive = result.data[4].setup
            const punchlineFive = result.data[4].punchline
            
            
            this.setState({
                setup1: randomSetup,
                punchline1: punchlineOne,
                setup2: randomSetupTwo,
                punchline2: punchlineTwo,
                setup3: randomSetupThree,
                punchline3: punchlineThree,
                setup4: randomSetupFour,
                punchline4: punchlineFour,
                setup5: randomSetupFive,
                punchline5: punchlineFive,
            })
        }
    componentDidMount () {
        this.getJokes();
    }
    render() {
        return (
            <div>
                <h1>Jokes</h1>
                <h2>{this.state.setup1}</h2>
                <p> {this.state.punchline1}</p>
                <h2>{this.state.setup2}</h2>
                <p> {this.state.punchline2}</p>
                <h2>{this.state.setup3}</h2>
                <p> {this.state.punchline3}</p>
                <h2>{this.state.setup4}</h2>
                <p> {this.state.punchline4}</p>
                <h2>{this.state.setup5}</h2>
                <p> {this.state.punchline5}</p>
               

            </div>
        )
    }
}

export default Jokes;
