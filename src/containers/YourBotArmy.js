import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  renderBots = () => {
    return (
      this.props.army &&
      this.props.army.map((bot) => (
        <BotCard
          handleDelete={this.props.handleDelete}
          handleClick={this.props.handleClick}
          key={bot.id}
          bot={bot}
        />
      ))
    );
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
