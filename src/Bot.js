import React from 'react';

function Bot({ bot, onAddToArmy }) {
  return (
    <div>
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />

      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
    </div>
  );
}

export default Bot;
