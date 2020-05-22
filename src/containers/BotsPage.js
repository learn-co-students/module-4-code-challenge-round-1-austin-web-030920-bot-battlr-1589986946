import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy.js";
import BotCollection from "./BotCollection.js";

const API = "http://localhost:6001/bots";
class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then((res) => res.json())
      .then((bots) =>
        this.setState({
          bots: bots,
        })
      );
  };

  setEnlistment = (id, status) => {
    this.setState({
      bots: this.state.bots.map((b) => {
        if (b.id === id) {
          b.isEnlisted = status;
        }
        return b;
      }),
    });
  };

  recruitBot = (id) => {
    this.setEnlistment(id, true);
  };

  dismissBot = (id) => {
    this.setEnlistment(id, false);
  };

  deleteBot = (bot) => {
    this.setState({
      bots: [...this.state.bots.filter((b) => b.id !== bot.id)],
    });

    fetch(`${API}/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.bots.filter((bot) => bot.isEnlisted)}
          dismissBot={this.dismissBot}
          deleteBot={this.deleteBot}
        />
        <BotCollection
          bots={this.state.bots.filter((bot) => !bot.isEnlisted)}
          recruitBot={this.recruitBot}
          deleteBot={this.deleteBot}
        />
      </div>
    );
  }
}

export default BotsPage;
