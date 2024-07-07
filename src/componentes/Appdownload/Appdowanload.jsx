import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdowanload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For better experience download <br />Tomato App </p>
        <div className="appdownload-platform">
            <img src= { assets.play_store } alt="" />
            <img src= { assets.app_store } alt="" />

        </div>
         
    </div>
  )
}

export default Appdowanload