import React, { Component } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy';
const BOT_URL = 'http://localhost:6001/bots';

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
    };
  }

  componentDidMount() {
    fetch(BOT_URL)
      .then((res) => res.json())
      .then((bots) => this.setState({ bots }));
  }

  setEnlistment(bot, isEnlisted) {
    this.setState({
      bots: this.state.bots.map((b) => 
      {
        if (b.id === bot.id) {
          b.enlisted = isEnlisted;
        }
        return b;
      }),
    });
  }

  enlistBot = (bot) => {
    this.setEnlistment(bot, true);
  };

  dischargeBot = (bot) => {
    this.setEnlistment(bot, false);
  };

  deleteBot = (bot) => {
    this.setState({
      bots: [...this.state.bots.filter((e) => e.id !== bot.id)],
    });
    fetch(`${BOT_URL}/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json',
      },
    });
  };

  render() {
    return (
      <div>
        <BotArmy
          botArmy={this.state.bots.filter((bot) => bot.enlisted)}
          dischargeBot={this.dischargeBot}
          deleteBot={this.deleteBot}
        ></BotArmy>
        <BotCollection
          bots={this.state.bots}
          enlistBot={this.enlistBot}
          deleteBot={this.deleteBot}
        ></BotCollection>
      </div>
    );
  }
}

export default BotsPage;
