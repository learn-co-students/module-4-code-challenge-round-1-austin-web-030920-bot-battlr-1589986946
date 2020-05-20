import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "http://localhost:6001/bots"


class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      allBots: [],
      yourArmy: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => this.setState({ allBots: json }))
  }

  addBot = (e) => {
    // console.log(e.target.parentElement.parentElement)
    console.log(e.children)
  }


  render() {
    return <div><YourBotArmy /><BotCollection allBots={this.state.allBots} clickHandler={this.addBot} /></div>;
  }
}

export default BotsPage;
