import React from 'react';
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy';

export default function BotsPage() {
  return (
    <div>
      <BotArmy></BotArmy>
      <BotCollection></BotCollection>
    </div>
  );
}
