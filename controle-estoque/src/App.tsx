import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { ProductProvider } from './context/ProductContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
