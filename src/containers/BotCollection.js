import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here
  eachRobot = () => {
    return this.props.bots.map(bot => < BotCard bot={bot} key={bot.id} botId={bot.id} handleClick={this.props.handleClick}/>);
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.eachRobot()}
         
        </div>
      </div>
    );
  }
}

export default BotCollection;

// armor: 97
// avatar_url: "https://robohash.org/autnesciunteos.png?size=300x300&set=set1"
// bot_class: "Defender"
// catchphrase: "01000111011001110101110100000111110111"
// created_at: "2018-10-02T19:55:11.840Z"
// damage: 24
// health: 60
// id: 152
// name: "Mx-73"
