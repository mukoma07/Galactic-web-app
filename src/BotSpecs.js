import React from 'react';

const BotCollection = ({ bots, handleSelectBot, handleEnlistBot }) => {
  return (
    <div>
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <span>{bot.name}</span>
            <button onClick={() => handleSelectBot(bot)}>View Details</button>
            <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;

