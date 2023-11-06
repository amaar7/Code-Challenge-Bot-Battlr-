import React from 'react';
import Bot from './Bot';

function YourBotArmy({ yourBotArmy, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {yourBotArmy.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDischarge={onDischarge}
            isAdded={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
