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

  manageArmy = () => {
    console.log('managing army')
  }

  componentDidMount() {
    this.setBots();
  }

  render() {
    // console.log(this.state)
    return <div>
      <YourBotArmy />
      <BotCollection handleClick={this.manageArmy} bots={this.state.bots}/>
    </div>;
  }

  setBots = () => {
    fetch("http://localhost:6001/bots")
      .then((r) => r.json())
      .then((j) => this.setState({
        bots: j
      }));
  };
}

export default BotsPage;
