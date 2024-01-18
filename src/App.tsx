import './App.css'
import React, { useState } from "react";
import { MainView } from './App/MainView'

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      { isStarted ? (
        <h1>Alpha Version 0.0.7-Dev</h1>
      ) : (
        <MainView initGame={isStarted} updateGameState={setIsStarted} />
      ) }
    </div>
  );
};

export default App;
