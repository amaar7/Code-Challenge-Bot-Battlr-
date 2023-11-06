import React from 'react';
import styles from './BotCollection.module.css';
import Bot from './Bot';

function BotCollection({ bots, onAddToArmy }) {
 return (
    <div className={styles.botCollection}>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
 );
}

export default BotCollection;