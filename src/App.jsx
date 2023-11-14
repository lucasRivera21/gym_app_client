import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Routines from './pages/Routines'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/routines' element={<Routines />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
