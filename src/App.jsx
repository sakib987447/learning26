import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import ContentComponent from './components/ContentComponent'
import {Navbar} from './components/Navbar'
import CabinetMinisters from './CabinetMinisters'
import {MapDemo1} from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo7 } from './components/MapDemo7'
import { MapDemo8 } from './components/MapDemo8'
import MapDemo9 from './components/MapDemo9'
import MapDemo10 from './components/MapDemo10'
import { Route, Routes } from 'react-router-dom'
import {NetflixMovies} from './components/NetflixMovies.jsx'
import {NetflixShows} from './components/NetflixShows.jsx'
import {NetflixHome} from './components/NetflixHome.jsx'
import {Webseries} from './components/Webseries.jsx'
import {Languages} from './components/Languages.jsx'
import {About} from './components/About.jsx'
import {IplTeams} from './components/IplTeams.jsx'
import { Watch } from './components/Watch.jsx'
import { FunctionDemo1 } from './components/FunctionDemo1.jsx'
import { UseStateDemo1 } from './components/UseStateDemo1.jsx'
import { Employees } from './components/Employees.jsx'
import { Employess3 } from './components/Employess3.jsx'
import { InputDemo2 } from './components/InputDemo2.jsx'
import { FormDemo1 } from './components/form/FormDemo1.jsx'
import { InputDropDown} from './components/InputDropDown.jsx'
import { FormDemo2 } from './components/form/FormDemo2.jsx'
import { FormDemo3 } from './components/form/FormDemo3.jsx'
import { FormDemo4 } from './components/form/FormDemo4.jsx'   
import {ApiDemo1} from './components/api/ApiDemo1.jsx'
import { ApiDemo2 } from './components/api/ApiDemo2.jsx'
import { ApiDemo3 } from './components/api/ApiDemo3.jsx'
import ApiDemo4 from './components/api/ApiDemo4.jsx'
import ApiDemo5 from './components/api/ApiDemo5.jsx'
import ApiDemo6 from './components/api/ApiDemo6.jsx'
import ApiDemo7 from './components/api/ApiDemo7.jsx'


function App() {
  //js code... num ber, string, underfined, boolean, object.
  return (
    <div>
     <Navbar></Navbar>
      <Routes> 
          {/*<Route path="/" element={<NetflixHome />}></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
          <Route path="/netflixshows" element={<NetflixShows />}></Route>
          <Route path="/webseries" element={<Webseries />}></Route>
          <Route path="/languages" element={<Languages />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/IplTeams" element={<IplTeams/>}></Route>
          <Route path="/watch/:name" element={<Watch/>}></Route>
          <Route path="/functionDemo1" element={<FunctionDemo1/>}></Route>
          <Route path="/useStateDemo1" element={<UseStateDemo1/>}></Route>
          <Route path="/employees" element={<Employees/>}></Route>
          <Route path="/employees3" element={<Employess3/>}></Route>
          <Route path="/inputDemo2" element={<InputDemo2/>}></Route> */}

         {/* <Route path="/formDemo1" element={<FormDemo1/>}></Route>
          <Route path="/inputDropDown" element={<InputDropDown/>}></Route>
          <Route path="/formDemo2" element={<FormDemo2/>}></Route>
          <Route path="/formDemo3" element={<FormDemo3/>}></Route>*/}
          <Route path="/formDemo4" element={<FormDemo4/>}></Route>
          <Route path="/apiDemo1" element={<ApiDemo1/>}></Route>
           <Route path="/apiDemo2" element={<ApiDemo2/>}></Route>
            <Route path="/apiDemo3" element={<ApiDemo3/>}></Route>
            <Route path="/apiDemo4" element={<ApiDemo4/>}></Route>
             <Route path="/apiDemo5" element={<ApiDemo5/>}></Route>
              <Route path="/apiDemo6" element={<ApiDemo6/>}></Route>
               <Route path="/apiDemo7" element={<ApiDemo7/>}></Route>
     

   </Routes>
   
      </div>
  )
}

export default App;
