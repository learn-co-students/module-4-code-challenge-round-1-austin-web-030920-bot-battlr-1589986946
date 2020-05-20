import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {

  // clickHandler = () => {
  //   this.props.clickHandler
  // }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/* {console.log(this.props)} */}
          {this.props.allBots.map(bot => <BotCard bot={bot} key={bot.id} clickHandler={this.props.clickHandler} />)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
