import React, { Component } from 'react';
import BotCard from '../components/BotCard';
import { connect } from 'react-redux';
import { enlistBotAction } from '../actions';

class BotCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => this.props.dispatch(enlistBotAction(bot.id))}
            ></BotCard>
          ))}
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(BotCollection);
