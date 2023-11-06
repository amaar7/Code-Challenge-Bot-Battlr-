import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar'; 
import BotSpecs from './BotSpecs'; 

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null); 

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

  const releaseBot = (bot) => {
    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    // Implemented the logic to discharge a bot, including a DELETE request to the server
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        releaseBot(bot);
      });
  };

  return (
    <div>
      <BotCollection
        bots={bots}
        onAddToArmy={addToArmy}
      />
      <YourBotArmy
        yourBotArmy={yourBotArmy}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
      {selectedBot && (
        <BotSpecs bot={selectedBot} onEnlist={addToArmy} />
      )}
      <SortBar />
    </div>
  );
}

export default App;
