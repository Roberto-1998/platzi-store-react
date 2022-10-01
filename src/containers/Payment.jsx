/* eslint-disable react/function-component-definition */
import React ,{useContext} from 'react';
import {PayPalButton} from 'react-paypal-button'
import AppContext from '../context/AppContent'
import '../styles/components/Payment.css';
import { handleSumTotal } from '../utils/handleSumTotal';
import {useNavigate} from 'react-router-dom'

const Payment = () => {

  const navigate=useNavigate()
  const {state, addNewOrder}=useContext(AppContext)
  const {cart, buyer}=state

  const paypalOptions={
    clientId:'nopuedotenerunoporquevivoencuba',
    intent:'capture',
    currency:'USD'
  }

  const buttonStyles={
    layout:'vertical',
    shape:'rect'
  }

  const sum=handleSumTotal(cart)

  const handlePaymentSuccess=(data)=>{
  
    if(data.status==='COMPLETE'){
      const newOrder={
        buyer,
        products:cart,
        payment:data
      }

      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item)=>(
          <div className='Payment-item' key={item.title}>
              <div className='Payment-element'>
                <h4>{item.title}</h4>
                <span>
                  ${item.price}
                </span>
              </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={sum}
          onPaymentStart={()=>console.log('Start Payment')}
          onPaymentSuccess={data=>handlePaymentSuccess(data)}
          onPaymentError={error=>console.log(error)}
          onPaymentCancel={data=>console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
