import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBWBf_Rar1ienZ7cculEqJK4aDOHOVznC4",
    authDomain: "invoice-app-c8bb0.firebaseapp.com",
    projectId: "invoice-app-c8bb0",
    storageBucket: "invoice-app-c8bb0.appspot.com",
    messagingSenderId: "649520729595",
    appId: "1:649520729595:web:c3af78dd1e8725b06ccf5e",
    databaseURL: "https://invoice-app-c8bb0-default-rtdb.firebaseio.com"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App database={database} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
