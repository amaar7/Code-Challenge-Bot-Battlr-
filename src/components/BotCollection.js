import React from 'react';
import Bot from './Bot';

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
  );
}

export default BotCollection;
