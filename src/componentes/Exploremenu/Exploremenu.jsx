import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        < p className='exploremenu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam placeat facere aliquid iure dolores temporibus omnis, ut eligendi provident!</p>
        <div className="exploremenu-list">
        {menu_list.map((item,index)=>{
            return  (
                <div onClick={()=>setcategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className="exploremenu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
        </div>

        <hr />
    </div>
  )
}

export default Exploremenu