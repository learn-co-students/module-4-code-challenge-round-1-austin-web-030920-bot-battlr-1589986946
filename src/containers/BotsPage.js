import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:6001/bots";

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      recruitedBots: [],
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then((res) => res.json())
      .then((bots) => {
        this.setState({
          bots: bots,
        });
      });
  };

  recruitOrDismissBot = (id) => {
    let currentBots = this.state.recruitedBots;

    if (currentBots.find((bot) => bot.id === id)) {
      let bot = currentBots.find((bot) => bot.id === id);
      const index = currentBots.indexOf(bot);
      if (index > -1) {
        currentBots.splice(index, 1);
      }
    } else {
      currentBots.push(this.state.bots.find((bot) => bot.id === id));
    }
    this.setState({
      recruitedBots: currentBots,
    });

    console.log(this.state.recruitedBots);
  };

  deleteBot = (id) => {
    const currentBots = this.state.bots

    let byeBot = this.state.bots.find(bot => bot.id === id)

    const index = currentBots.indexOf(byeBot);
    if (index > -1) {
      currentBots.splice(index, 1);
    }

    this.setState({
      bots: currentBots,
    });

  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.recruitedBots}
          buttonText="Dismiss"
          recruitOrDismissBot={this.recruitOrDismissBot}
          deleteBot={this.deleteBot}
        />
        <BotCollection
          bots={this.state.bots}
          recruitOrDismissBot={this.recruitOrDismissBot}
          buttonText="Recruit"
          deleteBot={this.deleteBot}
        />
      </div>
    );
  }
}

export default BotsPage;
