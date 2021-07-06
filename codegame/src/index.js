import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app"

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyBYxXHmZWrdZrVn0_CilkbZs-C1O73izpA",
  authDomain: "codegame-e5b2a.firebaseapp.com",
  projectId: "codegame-e5b2a",
  storageBucket: "codegame-e5b2a.appspot.com",
  messagingSenderId: "576878692286",
  appId: "1:576878692286:web:e9fabd9b448bf9cfc1dbef",
  measurementId: "G-3LZQ677DH1"
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
