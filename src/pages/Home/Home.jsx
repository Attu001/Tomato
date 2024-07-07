import React, { useState } from 'react'
import './Home.css'
import Header from '../../componentes/Header/Header'
import Exploremenu from '../../componentes/Exploremenu/Exploremenu'
import Fooddisplay from '../../componentes/Fooddisplay/Fooddisplay'
import Appdowanload from '../../componentes/Appdownload/Appdowanload'


const Home = () => {

  const [category,setcategory]=useState("all");



  return (
    <div>

          <Header/>
          <Exploremenu category={category} setcategory={setcategory}/>
          <Fooddisplay category={category}/>
          <Appdowanload/>
    </div>
  )
}

export default Home