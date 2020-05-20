import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  generateBot = () => {
    let bots = this.props.userBots
    return bots.map(bot => <BotCard 
       id = {bot.id}
       name = {bot.name}
       health = {bot.health}
       damage = {bot.damage}
       armor = {bot.armor}
       bot_class = {bot.bot_class}
       catchphrase = {bot.catchphrase}
       avatar_url = {bot.avatar_url}
       handleBotClick = {this.props.handleRemoveBotClick}
       handleDeleteClick = {this.props.handleDeleteBotClick}
      />)
    }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateBot()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
