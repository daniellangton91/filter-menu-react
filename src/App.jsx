import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ThemeSwitcher from "./components/ThemeSwitcher";
import AllCollapseExample from "./components/AllCollapseExample";
import ResponsiveExample from "./components/offcanvas";
function App() {
  
  return (
    <div className="App">
      
      <h1>Mighty Meals </h1>      
      <div>
        <ResponsiveExample />
      </div>
    </div>
  )
}

export default App
