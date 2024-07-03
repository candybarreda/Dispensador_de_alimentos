import { useState } from 'react'
import logo from './assets/logo.png'

import './App.css'

function App() {
  return (
    <>
      <div>
      
        <img src={logo} className="logo react" alt="logo.png" />
        
      </div>
      <h1>Dispensador de alimento</h1>
      <div className="card">
       
        <button class="card_button"onClick={() => fetch("/dispense", { method: "POST" })}>
          Press 
        </button>
        
      </div>
      
    </>
  )
}

export default App
