import './App.css';
import { Personas } from './Personas';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Listado de Personas</h1>
      <ul className="person-list">
        {Personas.map((Persona, index) => (
          <li key={index} className="person-item">
            <a target="_blank" rel="noopener noreferrer" className="person-link">
              {Persona.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
