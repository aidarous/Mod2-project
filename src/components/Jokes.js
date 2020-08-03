import React, { Component } from 'react'
import axios from 'axios';

// Pseudo code
/* 
* make axios request for the api
* update the set state
* render it to the screen
*
*/
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
            const randomSetupSix = result.data[5].setup
            const punchlineSix = result.data[5].punchline
            
            
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
                setup6: randomSetupSix,
                punchline6: punchlineSix
            })
        }
    componentDidMount () {
        this.getJokes();
    }
    render() {
        return (
            <div className="joke-background">
                <h1 className="text">Jokes</h1>
                <h2 className="text">{this.state.setup1}</h2>
                <p className="text"> {this.state.punchline1}</p>
                <h2 className="text">{this.state.setup2}</h2>
                <p className="text"> {this.state.punchline2}</p>
                <h2 className="text">{this.state.setup3}</h2>
                <p className="text"> {this.state.punchline3}</p>
                <h2 className="text">{this.state.setup4}</h2>
                <p className="text"> {this.state.punchline4}</p>
                <h2 className="text">{this.state.setup5}</h2>
                <p className="text"> {this.state.punchline5}</p>
                <h2 className="text">{this.state.setup6}</h2>
                <p className="text"> {this.state.punchline6}</p>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
               

            </div>
        )
    }
}

export default Jokes;
