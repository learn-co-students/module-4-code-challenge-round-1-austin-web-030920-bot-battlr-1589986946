import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {
            this.props.bots && this.props.bots.map( bot => 
              <BotCard 
                bot={bot}
                handleBotClick={this.props.handleBotClick}
                handleDischarge={this.props.handleDischarge} />
            )
          }
        </div>
      </div>
    );
  }
}

export default BotCollection;
