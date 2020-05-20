import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  render() {
    return <div><YourBotArmy /><BotCollection /></div>;
  }
}

export default BotsPage;
