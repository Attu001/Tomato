import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';

const Navbar = ({setshowlogin}) => {

    const [menu,setmenu]=useState("home");
    const {gettotalcartamount}=useContext(Storecontext);
  return (
    <div className='navbar'>
        <Link to='/' >  <img src={assets.logo} className='logo' alt="" /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#exploremenu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#appdownload' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart' >  <img  src={assets.basket_icon} alt="" /></Link>
                <div className={gettotalcartamount()===0?"":"dot"}>  </div>

            </div>
                <button onClick={()=>setshowlogin(true)}>sign in</button>

              
        </div>
    </div>
  )
}

export default Navbar