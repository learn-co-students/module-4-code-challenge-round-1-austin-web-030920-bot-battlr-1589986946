import React, { Component } from "react";
import BotService from '../service';
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bots: [],
       myBots: []
    }
  }


  handleArmyBotClick = (id) => {
    // remove from army
    this.setState({
      myBots: this.state.myBots.filter(bot => bot.id !== id)
    })
  }
  
  handleBotClick = (id) => {
    // add to army
    let found = this.state.myBots.find(bot => bot.id === id);
    let bot = this.state.bots.find(bot => bot.id === id);
    if (!found) {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  handleDischarge = async (id) => {
    let found = this.state.myBots.find(bot => bot.id === id);
    let bot = this.state.bots.find(bot => bot.id === id);
      // persist delete
    let response = await BotService.delete(id);
    // console.log(response);
    // update bots
    let bots = await BotService.getAll();
    this.setState({ bots });
    this.handleArmyBotClick(id);
  }

  async componentDidMount() {
    let bots = await BotService.getAll();
    this.setState({ bots })
  }

  render() {
    return (
      <div>
        <YourBotArmy  
          bots={this.state.myBots}
          handleBotClick={this.handleArmyBotClick}
          handleDischarge={this.handleDischarge} />
        <BotCollection 
          bots={this.state.bots}
          handleBotClick={this.handleBotClick}
          handleDischarge={this.handleDischarge}/>
      </div>
    )
  }
}

export default BotsPage;
