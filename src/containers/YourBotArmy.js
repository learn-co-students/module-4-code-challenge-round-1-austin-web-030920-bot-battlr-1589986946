import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          Your Bot Army
          <div className="row bot-army-row">
            {this.props.bots.map((bot) => (
              <BotCard
                bot={bot}
                key={bot.id}
                recruitOrDismissBot={this.props.recruitOrDismissBot}
                deleteBot={this.props.deleteBot}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
