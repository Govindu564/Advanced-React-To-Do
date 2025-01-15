import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import your Redux store
import App from './App';
import './index.css'; // Import styles
// import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root')); // Root element
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
