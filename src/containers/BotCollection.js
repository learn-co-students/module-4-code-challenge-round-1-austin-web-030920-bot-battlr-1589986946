import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.allBots.map(bot => <BotCard bot={bot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
