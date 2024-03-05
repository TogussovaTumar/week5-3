import React from 'react';
import Tooltip from './Tooltip/Tooltip';
import './App.css';

const App = () => {
  return (
      <div>
        <Tooltip position="top" content="Top Tooltip">
          <button>Top</button>
        </Tooltip>

        <Tooltip position="right" content="Right Tooltip">
          <button>Right</button>
        </Tooltip>

        <Tooltip position="bottom" content="Bottom Tooltip">
          <button>Bottom</button>
        </Tooltip>

        <Tooltip position="left" content="Left Tooltip">
          <button>Left</button>
        </Tooltip>
      </div>
  );
};

export default App;
