import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets';
const Loginpopup = ({setshowlogin}) => {
const [currentstate,setcurrentstate]=useState("signup"); 

  return (
    <div className='loginpopup'>
        <form className='login-popup-container' >
            <div className="login-title">
                <h2>{currentstate}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currentstate==="login"?<></>:
                <input type="text" placeholder='your name' required />
}
                <input type="email" placeholder='your email' required />
                <input type="password" placeholder='enter password' required />

            </div>
            <button>{currentstate==="signup"?"createaccount":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>By continuing ,i agree the terms of use and Privacy policy.</p>
            </div>
            {currentstate==="login"
                ?
                <p>create new account ? <span onClick={()=>setcurrentstate("signup")}>Click Here!</span></p>
                :
                <p>Already have an account? <span onClick={()=>setcurrentstate("login")}>Login here</span> </p>
            }
            
        </form>
    </div>
  )
}

export default Loginpopup