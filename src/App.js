import './App.css';
import { Personas } from './Personas';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <h1 className="app-title">Listado de Personas</h1>
      <ul className="person-list">
        {Personas.map((Persona, index) => (
          <li key={index} className="person-item">
            <a href={`/DetallePersona/${Persona.id}`} target="_blank" rel="noopener noreferrer" className="person-link">
              {Persona.nombre} {Persona.apellido}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
