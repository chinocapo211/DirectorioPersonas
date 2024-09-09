import './App.css';
import { Personas } from './Personas';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
function DetallePersona() {
    const { Id } = useParams();
    const persona = Personas.find(p => p.id === Id);
    if (!persona) {
        return (
            <div className="app-container">
                <h1 className="app-title">Persona no encontrada</h1>
            </div>
        );
    }

    return (
        <div className="app-container">
          <Navbar/>
            <h1 className="app-title">Detalles de la Persona</h1>
            <div className="persona-details">
                <p><strong>Nombre:</strong> {persona.nombre}</p>
                <p><strong>Apellido:</strong> {persona.apellido}</p>
                <p><strong>Email:</strong> {persona.email}</p>
                <p><strong>Edad:</strong> {persona.edad}</p>
                <p><strong>Id:</strong> {persona.id}</p>
            </div>
        </div>
    );
}

export default DetallePersona;
