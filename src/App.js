import React, { Component } from 'react';
import BotsPage from './containers/BotsPage';
import './App.css';
import { connect } from 'react-redux';
import { setBotsAction } from './actions';

const BOT_URL = 'http://localhost:6001/bots';

class App extends Component {
  componentDidMount() {
    fetch(BOT_URL)
      .then((res) => res.json())
      .then((bots) => this.props.dispatch(setBotsAction(bots)));
  }

  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default connect((store) => store)(App);
