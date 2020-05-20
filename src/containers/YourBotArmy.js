import React, { Component } from 'react';
import BotCard from '../components/BotCard';

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={this.props.dischargeBot}
                deleteBot={this.props.deleteBot}
              ></BotCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
