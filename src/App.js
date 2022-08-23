import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.compenet';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
