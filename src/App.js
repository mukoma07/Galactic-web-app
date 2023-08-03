import React, { useState } from 'react';
import BotCollection from './BotCollection'; // Updated path, moved to the same level as App.js
import YourBotArmy from './YourBotArmy'; // Updated path, moved to the same level as App.js
import BotSpecs from './BotSpecs'; // Updated path, moved to the same level as App.js
import SortBar from './SortBar'; // Updated path, moved to the same level as App.js

const App = () => {
  // Your state and functions here

  return (
    <div>
      {/* Your JSX code here */}
      <SortBar handleSortBy={handleSortBy} />
      <BotCollection
        bots={bots}
        handleSelectBot={handleSelectBot}
        handleEnlistBot={handleEnlistBot}
      />
      <YourBotArmy enlistedBots={enlistedBots} handleReleaseBot={handleReleaseBot} />
      {selectedBot && (
        <BotSpecs
          selectedBot={selectedBot}
          handleEnlistBot={handleEnlistBot}
          handleBackToCollection={handleBackToCollection}
        />
      )}
    </div>
  );
};

export default App;
