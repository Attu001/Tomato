import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'


const Placeorder = () => {

    const {gettotalcartamount}=useContext(Storecontext);

  return (
    <form className='placeorder'>
      <div className="placeorder-left">
      <p className='title'>delivary information</p>
      <div className="multifields">
      <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='email'/>
      <input type="text" placeholder='street'/>
      <div className="multifields">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
      </div>
      <div className="multifields">
      <input type="text" placeholder='Zip code'/>
      <input type="text" placeholder='Country'/>
      </div>
      <input type="text " placeholder='Phone' />
      </div>
      <div className="laceorder-right">
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
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotalcartamount()+2}</b>
            </div>
          </div>
          <button >Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder