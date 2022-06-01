import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
