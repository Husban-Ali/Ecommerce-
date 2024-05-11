import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './Navigation/Navigation.jsx'
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>,
)
