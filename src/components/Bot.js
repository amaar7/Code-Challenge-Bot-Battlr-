import React from 'react';

function Bot({ bot, onAddToArmy, isAdded }) {
  return (
    <div className={`bot-card ${isAdded ? 'added' : ''}`}>
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <img src={bot.avatar_url} alt={bot.name} />

      {isAdded ? null : <button onClick={() => onAddToArmy(bot)}>Add to Army</button>}
    </div>
  );
}

export default Bot;
