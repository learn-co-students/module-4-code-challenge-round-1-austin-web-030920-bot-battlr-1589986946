import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {

  constructor() {
    super()
    this.state = {
        bots: [],
        selectedBots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(response => response.json())
    .then(bots => this.setState({
      bots: bots
    }))
  }


  // Callback function to change YourBotArmy state on click


  addToUserBots = (bot) => {
    if (!this.state.selectedBots.filter(e => e.name === bot.name).length > 0) {
      let temp = this.state.selectedBots
      temp.push(bot)
      this.setState({ selectedBots: temp})
    } else {console.log("Not added")}
    
  }

  handleBotClick = (botId) => {
    fetch(`http://localhost:6001/bots/${botId}`)
    .then(response => response.json())
    .then(data => this.addToUserBots(data))
  }

  handleRemoveBotClick = (botId) => {
    let bots = this.state.selectedBots
    for (let i = 0; i < bots.length; i++) {
      if (bots[i].id === botId) {
        bots.splice(i, 1)
        this.setState({
          selectedBots: bots
        })
      }
    }
  }

  handleDeleteBotClick = (botId) => {
    this.handleRemoveBotClick(botId)

    fetch(`http://localhost:6001/bots/${botId}`, {method: 'delete'})

    fetch('http://localhost:6001/bots')
    .then(response => response.json())
    .then(bots => this.setState({
      bots: bots
    }))

    // Did not have enough time to make this function prettier or work better on the page, had some problems with intersecting onClick

  }


  

  render() {
    return <div>
      <YourBotArmy userBots = {this.state.selectedBots} handleRemoveBotClick={this.handleRemoveBotClick} handleDeleteBotClick={this.handleDeleteBotClick}/>
      <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick} handleDeleteBotClick={this.handleDeleteBotClick}/>
      

      
      
      </div>;
  }
}

export default BotsPage;
