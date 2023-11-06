import React from 'react';
import Bot from './Bot';

function BotCollection({ bots, onAddToArmy, yourBotArmy }) {
  return (
    <div className="bot-grid">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} isAdded={yourBotArmy.includes(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
