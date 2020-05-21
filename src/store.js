import { createStore } from 'redux';
const BOT_URL = 'http://localhost:6001/bots';

const initialState = {
  bots: [],
};

const reducer = function (state = initialState, action) {
  console.log(`Action dispatched: ${action.type}`);

  switch (action.type) {
    case 'DELETE_BOT':
      fetch(`${BOT_URL}/${action.payload}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Accepts: 'application/json',
        },
      });
      return {
        ...state,
        bots: [...state.bots.filter((e) => e.id !== action.payload)],
      };
    case 'DISCHARGE_BOT':
      return {
        ...state,
        bots: setBotEnlistment(state.bots, action.payload, false),
      };
    case 'ENLIST_BOT':
      return {
        ...state,
        bots: setBotEnlistment(state.bots, action.payload, true),
      };
    case 'SET_BOTS':
      return { ...state, bots: action.payload };
    default:
      return state;
  }
};

function setBotEnlistment(bots, botId, isEnlisted) {
  return bots.map((b) => {
    if (b.id === botId) {
      b.enlisted = isEnlisted;
    }
    return b;
  });
}

export default createStore(reducer);
