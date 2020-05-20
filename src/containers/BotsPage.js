import React, { Component } from "react";
import BotCollection from "./BotCollection";
import BotCard from "../components/BotCard";

class BotsPage extends Component {

  constructor() {
    super();
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:6001/bots`)
      .then(rsp => rsp.json())
      .then(props => this.setState(props))
  }

  //but wait what how do i actually use my freakin' fetch omg slkfjlskdjfl

  render() {
    return <div>
      <BotCollection />
      <BotCard />
      </div>;
  }
}

export default BotsPage;


// what I need to work on:
// 1. fetching with React, apparently
// 2. rendering with React
// 3. information flow in React
// 4. UGH