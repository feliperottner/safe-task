import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar a aplicação
import App from './App'; // Importa o componente principal da aplicação
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap para estilização
import './styles/App.css'; // Importa o CSS customizado da aplicação

// Cria a raiz da aplicação React no elemento HTML com id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente <App /> dentro do modo estrito do React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
