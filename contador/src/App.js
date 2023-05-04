import './App.css';
import Button from './components/Button';
import logoPrincipal from './images/logo_gato.png';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const doClick = () => {
    setNumClicks(numClicks+1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="main-logo" src={logoPrincipal} alt="logo main" /> 
      </div>
      <div className="counter-container">
        <Counter clicks={numClicks} />
        <Button 
          text="clickear"
          resetButton={false}
          functionButton={doClick} />
        <Button 
          text="resetear"
          resetButton={true}
          functionButton={resetCounter} />
      </div>
    </div>
  );
}

export default App;
