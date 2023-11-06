import React, { useState, useEffect } from 'react';
import Bot from './Bot';

import './App.css'; // Make sure to import your CSS file for styling

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetched bots data from the server
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!yourBotArmy.includes(bot)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  return (
    <div>
      <div className="bot-grid">
        {bots.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            onAddToArmy={addToArmy}
            isAdded={yourBotArmy.includes(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
