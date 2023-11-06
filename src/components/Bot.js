import React from 'react';

function Bot({ bot, onAddToArmy, isAdded }) {
  return (
    <div className={`bot-card ${isAdded ? 'added' : ''}`}>
      <div className={`bot-content ${isAdded ? 'added-bg' : ''}`}>
        <img src={bot.avatar_url} alt={bot.name} className={`medium-bot ${isAdded ? 'added-bg' : ''}`} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>

        {isAdded ? (
          <p>Added to Army</p>
        ) : (
          <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
        )}
      </div>
    </div>
  );
}

export default Bot;
