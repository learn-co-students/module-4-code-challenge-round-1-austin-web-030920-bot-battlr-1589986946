import React, { Component } from "react";
import BotCard from "../components/BotCard.js";
class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          Your Bot Army
          <div className="row bot-army-row">
            {this.props.army.map((bot) => (
              <BotCard
                bot={bot}
                key={bot.id}
                handleClick={this.props.dismissBot}
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
