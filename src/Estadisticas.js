import './App.css';
import Navbar from './Navbar';
import { Personas } from './Personas';

function Estadisticas() {
    return (
        <div className="app-container">
            <Navbar/>
            <h1 className="app-title">Estadisticas de la Persona</h1>
        </div>
    );
}

export default Estadisticas;
