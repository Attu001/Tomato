import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const{cartitem,food_list,removefromcart,gettotalcartamount}=useContext(Storecontext);
  const navigate  =useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
        <p>items</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{

              if(cartitem[item._id]>0)
              { 
                return (
                  <div>
                  <div className="cart-item-title cart-item-item">
                      <p>
                          <img src={item.image} alt="" /> </p>   
                          <p>{item.name}</p>            
                          <p>${item.price}</p>
                          <p>{cartitem[item._id]}</p>   
                          <p>${item.price*cartitem[item._id]}</p>
                          <p onClick={()=>removefromcart(item._id)} className='cross'>X</p>
                      
                  </div> 
                  <hr />
                  </div>
                )
              }


        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivary fee</p>
              <p>{gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
          {gettotalcartamount()===0?<></>:
          <button onClick={()=>navigate('/order')}>Proceed To Check Out</button>

            
        }
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter here</p>
            <div className='card-promocode-input'>
                <input type="text"  placeholder='Enter your promocode here' />
                <button>submit</button>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart