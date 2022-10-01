/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, {useContext} from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContent'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {

  const {state}=useContext(AppContext)
  const {buyer}=state
  const location=useGoogleAddress(buyer[0].address);
  
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  );
};

export default Success;
