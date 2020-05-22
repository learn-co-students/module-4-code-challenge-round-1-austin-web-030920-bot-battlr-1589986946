import React, { Component } from "react";
import BotCard from "../components/BotCard.js";

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <React.Fragment>
        Collection of all bots
        <div>
          Filters:
          <button className="ui mini red button">X</button>
          <button className="ui mini button">Assault</button>
          <button className="ui mini button">Defender</button>
          <button className="ui mini button">Support</button>
          <button className="ui mini button">Medic</button>
          <button className="ui mini button">Witch</button>
          <button className="ui mini button">Captain</button>
        </div>
        <br></br>
        <div className="ui four column grid">
          <div className="row">
            {this.props.bots.map((bot) => (
              <BotCard
                bot={bot}
                key={bot.id}
                handleClick={this.props.recruitBot}
                deleteBot={this.props.deleteBot}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BotCollection;
