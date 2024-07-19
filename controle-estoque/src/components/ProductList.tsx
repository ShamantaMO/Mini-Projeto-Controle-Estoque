import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.title = `Produtos (${filteredProducts.length})`;
  }, [filteredProducts.length]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produtos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
