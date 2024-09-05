import './App.css';
import { Personas } from './Personas';

function DetallePersona() {
    const { Id } = useParams();
  return (
    <div className="app-container">
      <h1 className="app-title">Listado de Personas</h1>
      <p>{Id}</p>
    </div>
  );
}

export default DetallePersona;
