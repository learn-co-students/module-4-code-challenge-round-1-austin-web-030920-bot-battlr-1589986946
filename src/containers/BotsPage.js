import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  constructor() {
    super();

    this.state = {
      bots: [],
    };
  }

  manageArmy = (bot) => {
    bot.enlisted === false || bot.enlisted === undefined ? this.enlistBot(bot.id) : this.dischargeBot(bot.id);
    this.setState({ bots: this.state.bots });
  };

  deleteBot = (bot) => {
    // send a fetch delete request to the back end
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let index = this.state.bots.indexOf(bot);
    this.state.bots.splice(index, 1);
    this.setState({ bots: this.state.bots });
  };

  componentDidMount() {
    this.setBots();
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <YourBotArmy
          handleDelete={this.deleteBot}
          handleClick={this.manageArmy}
          army={this.state.bots.filter((b) => b.enlisted)}
        />
        <BotCollection
          handleDelete={this.deleteBot}
          handleClick={this.manageArmy}
          bots={this.state.bots}
        />
      </div>
    );
  }

  setBots = () => {
    fetch("http://localhost:6001/bots")
      .then((r) => r.json())
      .then((j) =>
        this.setState({
          bots: j,
        })
      );
  };

  enlistBot = (botId) => {
    this.state.bots.find((bot) => bot.id === botId).enlisted = true;
  };

  dischargeBot = (botId) => {
    this.state.bots.find((bot) => bot.id === botId).enlisted = false;
  };
}

export default BotsPage;
