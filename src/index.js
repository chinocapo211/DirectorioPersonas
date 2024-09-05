import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import DetallePersona from './DetallePersona';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/persona/:Id" element={<DetallePersona />} /> {/* Ruta dinámica */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
