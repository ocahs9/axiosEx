import { Route, Routes } from 'react-router-dom'
//import './App.css'
import Home from './pages/Home/Home'
import Items from './pages/Items/Items'
import Members from './pages/Members/Members'
import Orders from './pages/Orders/Orders'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/items' element={<Items/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/orders' element={<Orders/>}/>
    </Routes>
  )
}

export default App
