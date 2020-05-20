import React, { Component } from "react";
import BotCard from "../components/BotCard"

class YourBotArmy extends Component {
  constructor(props) {
    super();
    };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.bots.map(bot => < BotCard key={bot.id} bot={bot}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
