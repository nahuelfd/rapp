import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Index.css';
import { CarritoProvider } from './context/CarritoContext';
import App from './Components/App';
import './utils/funciones.js'
import './utils/fire.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App/>
  </CarritoProvider>
    
  
);

