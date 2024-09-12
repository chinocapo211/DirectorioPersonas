import './App.css';
import Navbar from './Navbar';
import { Personas } from './Personas';

function Estadisticas() {
    const edadLimite = 35;
    const cantPersonasMasLim = Personas.filter(persona => persona.edad > edadLimite).length;
    
    const edadMaxima = Personas.reduce((max, persona) => persona.edad > max.edad ? persona : max, Personas[0]).edad;
    const edadMinima = Personas.reduce((min, persona) => persona.edad < min.edad ? persona : min, Personas[0]).edad;

    const personasConEdadMax = Personas.filter(persona => persona.edad === edadMaxima);
    const personasConEdadMin = Personas.filter(persona => persona.edad === edadMinima);


    return (
        <div className="app-container">
            <Navbar />
            <h1 className="app-title">Estadísticas de la Persona</h1>
            <div className="stats-container">
                <div className="stat-item">
                    <h2>Personas mayores de {edadLimite} años:</h2>
                    <p className="stat-value">{cantPersonasMasLim}</p>
                </div>
                <div className="stat-item">
                    <h2>Personas de Edad Máxima ({edadMaxima} años):</h2>
                    <ul className="stat-list">
                        {personasConEdadMax.map(persona => (
                            <li key={persona.nombre} className="stat-list-item">
                                {persona.nombre}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="stat-item">
                    <h2>Personas de Edad Mínima ({edadMinima} años):</h2>
                    <ul className="stat-list">
                        {personasConEdadMin.map(persona => (
                            <li key={persona.nombre} className="stat-list-item">
                                {persona.nombre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Estadisticas;
