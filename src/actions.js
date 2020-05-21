export function deleteBotAction(botId) {
  return {
    type: 'DELETE_BOT',
    payload: botId,
  };
}

export function dischargeBotAction(botId) {
  return {
    type: 'DISCHARGE_BOT',
    payload: botId,
  };
}

export function enlistBotAction(botId) {
  return {
    type: 'ENLIST_BOT',
    payload: botId,
  };
}

export function setBotsAction(botList) {
  return {
    type: 'SET_BOTS',
    payload: botList,
  };
}
