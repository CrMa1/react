import './App.css';
import Testimony from './components/Testimonio';

const data = require('./data/data.json');

function App() {
  return (
    <div className="App">
      <div className="d-main">
        <h1>Esto es lo que dicen los alumnos del curso de CodeCamp :D</h1>
        {
          data.map(
            person => 
            <Testimony 
            name={person.name}
            country={person.country}
            position={person.position}
            company={person.company}
            testimony={person.testimony}
            image={person.image} />
          )
        }
      </div>
    </div>
  );
}

export default App;
