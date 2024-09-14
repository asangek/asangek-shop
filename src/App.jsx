
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { IteamListContainer } from './Components/IteamListContainer/IteamListContainer'

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom"


function App() {
 
  return (
    <>


    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<IteamListContainer />} />
    </Routes>
  </BrowserRouter>


  
  
  </>
);
}

export default App
