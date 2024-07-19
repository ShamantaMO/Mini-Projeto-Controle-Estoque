import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const ProductForm: React.FC = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [category, setCategory] = useState<'Comida' | 'Bebida' | 'Não comestível'>('Comida');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price !== '' && quantity !== '') {
      addProduct({
        id: Date.now(),
        name,
        description,
        price: Number(price),
        quantity: Number(quantity),
        category,
      });
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
      setCategory('Comida');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </div>
      <div>
        <label>Quantidade:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      </div>
      <div>
        <label>Categoria:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value as 'Comida' | 'Bebida' | 'Não comestível')}>
          <option value="Comida">Comida</option>
          <option value="Bebida">Bebida</option>
          <option value="Não comestível">Não comestível</option>
        </select>
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
