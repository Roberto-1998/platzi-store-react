/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import Layout from '../components/Layout';
import AppContext from '../context/AppContent';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
