import React from 'react';
import Bot from './Bot';

function YourBotArmy({ yourBotArmy, onRelease, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map((bot) => (
        <Bot key={bot.id} bot={bot} onRelease={onRelease} onDischarge={onDischarge} />
      ))}
    </div>
  );
}

export default YourBotArmy;
