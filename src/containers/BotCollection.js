import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  renderBots = () => {
  return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} />)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
