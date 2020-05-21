import React, { Component } from 'react';
import BotCard from '../components/BotCard';
import { connect } from 'react-redux';
import { dischargeBotAction } from '../actions';

class YourBotArmy extends Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={() =>
                  this.props.dispatch(dischargeBotAction(bot.id))
                }
              ></BotCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => ({
  bots: store.bots.filter((e) => e.enlisted),
}))(YourBotArmy);
