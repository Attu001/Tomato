import React, { useState } from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Loginpopup from './componentes/Loginpopup/Loginpopup'

const App = () => {

  const [showlogin,setshowlogin]=useState(false)

  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin} />:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Placeorder/>}/>
        

      </Routes>
    
    </div>
      <Footer/>
      </>
  )
}

export default App