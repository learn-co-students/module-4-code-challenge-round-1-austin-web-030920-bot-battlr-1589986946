import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {

  generateBot = () => {
    let bots = this.props.bots
    return bots.map(bot => <BotCard 
       id = {bot.id}
       name = {bot.name}
       health = {bot.health}
       damage = {bot.damage}
       armor = {bot.armor}
       bot_class = {bot.bot_class}
       catchphrase = {bot.catchphrase}
       avatar_url = {bot.avatar_url}
       handleBotClick = {this.props.handleBotClick}
       handleDeleteClick = {this.props.handleDeleteBotClick}
      />)
    }

  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.generateBot()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
