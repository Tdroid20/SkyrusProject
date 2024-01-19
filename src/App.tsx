import './App.css'
import React, { useState } from "react";
import { MainView } from './App/MainView'
import { LauchGameComponent } from './App/Components/LauchGameComponent';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      { isStarted ? (
        <LauchGameComponent />
      ) : (
        <MainView initGame={isStarted} updateGameState={setIsStarted} />
      ) }
    </div>
  );
};

export default App;
