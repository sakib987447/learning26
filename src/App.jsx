import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import ContentComponent from './components/ContentComponent'
import Navbar from './Navbar'
import CabinetMinisters from './CabinetMinisters'

function App() {

  //js code... num ber, string, underfined, boolean, object.


  return (

    

    <div>
      <Navbar/>
      <ContentComponent />
      <CabinetMinisters/>
      
    </div>

    

    

  )
}


export default App
