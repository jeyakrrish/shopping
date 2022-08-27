import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase-config';
import Authentication from './routes/authentication/authentication.compenet';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

import { setCurrentUser } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return subscribe;


  }, [])
  
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes >
  );
}

export default App;
