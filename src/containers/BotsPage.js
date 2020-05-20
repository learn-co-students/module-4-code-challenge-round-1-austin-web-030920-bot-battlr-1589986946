import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"



class BotsPage extends Component {
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then(r => r.json())
      .then(bots => this.setState({bots: bots}))
  }

  addToMyBots = bot => {
    this.setState = ({
      //was thinking to add conditional for only enlisting once here, but not sure if 
      //that's happening here...
      
      myBots: [...this.state.myBots, bot]
    });
  };


  render() {
    return (<div>
      <YourBotArmy bots={this.state.myBots} />
      <BotCollection bots={this.state.bots} addToMyBots={this.addToMyBots}/>
      </div>
    );
  }
}

export default BotsPage;
