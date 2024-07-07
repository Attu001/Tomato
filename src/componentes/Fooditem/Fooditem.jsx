import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext';


const Fooditem = ({id,name,price,description,image}) => {

    const {cartitem,addtocart,removefromcart}=useContext(Storecontext);



  return (
    <div className='fooditem'>
        <div className="fooditem-image-container">
            <img className='fooditemimage' src={image} alt="" />
           {
                !cartitem[id]
                ?
                 <img className='add'  onClick={()=> addtocart(id) } src={assets.add_icon_white} alt=""/>
                :
                <div className="fooditem-counter">

                <img onClick={()=> removefromcart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartitem[id]}</p>
                <img onClick={()=> addtocart(id)} src={assets.add_icon_green } alt="" />

                </div>
               


           }
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='fooditem-desc'>{description}</p>
            <p className="fooditem-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem