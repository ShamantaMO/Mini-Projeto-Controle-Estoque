import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList />
    </div>
  );
};

export default Home;
