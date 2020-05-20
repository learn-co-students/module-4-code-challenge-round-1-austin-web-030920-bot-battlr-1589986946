import React, { Component } from "react";

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
    console.log(this.state)
    return <div>{/* put your components here */}</div>;
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
