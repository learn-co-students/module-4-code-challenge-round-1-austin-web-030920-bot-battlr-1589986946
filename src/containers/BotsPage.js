import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection";

class BotsPage extends Component {
  constructor() {
    super();

    this.state = {
      bots: [],
    };
  }

  componentDidMount() {
    this.setBots();
  }

  render() {
    // console.log(this.state)
    return <div>
      <BotCollection bots={this.state.bots}/>
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
