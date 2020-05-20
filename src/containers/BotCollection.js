import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  constructor(props) {
    super();
    };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} addToMyBots= {this.props.addToMyBots} />
          ))
          }

        </div>
      </div>
    );
  }
}

export default BotCollection;
