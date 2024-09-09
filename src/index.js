import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import DetallePersona from './DetallePersona';
import Estadisticas from './Estadisticas';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/DetallePersona/:Id" element={<DetallePersona />} /> {/* Ruta dinámica */}
      <Route path="/Estadisticas" element={<Estadisticas />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
