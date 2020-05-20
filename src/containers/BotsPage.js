import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

const API = "http://localhost:6001/bots"

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then((r) => r.json())
      .then((data) => this.setState({ data }));
  }

  enlistRobot(e) {
    e.persist()
    console.log(e.target.src)
    console.log(e.target)
    console.log(e)
  }

  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.data} handleClick={this.enlistRobot}/>
      </div>
    );
  }
}

export default BotsPage;
