import './App.css';
import logoPrincipal from './images/logo_gato.png';
import List from './components/list';

function App() {
  return (
    <div className="App-to-do">
      <div className='logo-content'>
        <img
          src={logoPrincipal} 
          className='logo-img'
          alt='logo' 
        />
      </div>
      <div className='list-to-do'>
        <h1>Tareas :D</h1>
        <List  />
      </div>
    </div>
  );
}

export default App;
