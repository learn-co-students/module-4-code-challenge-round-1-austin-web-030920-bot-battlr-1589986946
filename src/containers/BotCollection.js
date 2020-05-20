import React, { Component } from "react";
import BotCard from "../components/BotCard";

const API = "http://localhost:6001/bots"

class BotCollection extends Component {
  constructor() {
    super();
    this.state = {
      allBots: []
    }
  }
  
  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => this.setState({ allBots: json }))
  }


  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.allBots.map(bot => <BotCard bot={bot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
