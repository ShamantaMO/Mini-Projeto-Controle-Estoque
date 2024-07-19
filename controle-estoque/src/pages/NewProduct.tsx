import React from 'react';
import ProductForm from '../components/ProductForm';

const NewProduct: React.FC = () => {
  return (
    <div>
      <h1>Adicionar Novo Produto</h1>
      <ProductForm />
    </div>
  );
};

export default NewProduct;
