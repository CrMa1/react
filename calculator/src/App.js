import './App.css';
import logoPrincipal from './images/logo_gato.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState('');

  const addValue = value =>{
    setInput(input+value);
  };

  const doOperation = () => {
    if(input){
      try{ setInput(evaluate(input)); 
      }catch(e) { 
        console.error(e); 
      }
    }
  };
  return (
    <div className='App'>
      <div className='logo'>
        <img
          src={logoPrincipal} 
          className='logo-img'
          alt='logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button setClick={addValue}>1</Button>
          <Button setClick={addValue}>2</Button>
          <Button setClick={addValue}>3</Button>
          <Button setClick={addValue}>+</Button>
        </div>
        <div className='row'>
          <Button setClick={addValue}>4</Button>
          <Button setClick={addValue}>5</Button>
          <Button setClick={addValue}>6</Button>
          <Button setClick={addValue}>-</Button>
        </div>
        <div className='row'>
          <Button setClick={addValue}>7</Button>
          <Button setClick={addValue}>8</Button>
          <Button setClick={addValue}>9</Button>
          <Button setClick={addValue}>*</Button>
        </div>
        <div className='row'>
          <Button setClick={doOperation}>=</Button>
          <Button setClick={addValue}>0</Button>
          <Button setClick={addValue}>.</Button>
          <Button setClick={addValue}>/</Button>
        </div>
        <div className='row'>
          <ClearButton setClick={()=>setInput('')}>Limpiar</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
