import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "http://localhost:6001/bots"

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      allBots: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => this.setState({allBots: json}))
  }

  render() {
    return <div><YourBotArmy /><BotCollection /></div>;
  }
}

export default BotsPage;
