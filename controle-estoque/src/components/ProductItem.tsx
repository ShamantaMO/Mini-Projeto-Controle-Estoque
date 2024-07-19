import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: 'Comida' | 'Bebida' | 'Não comestível';
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { removeProduct, updateProductQuantity } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState(product.quantity);

  const handleRemove = () => {
    if (window.confirm(`Tem certeza que deseja remover o produto ${product.name}?`)) {
      removeProduct(product.id);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      setNewQuantity(quantity);
    }
  };

  const handleSave = () => {
    updateProductQuantity(product.id, newQuantity);
    setIsEditing(false);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      <p>
        Quantidade: {isEditing ? (
          <>
            <input type="number" value={newQuantity} onChange={handleQuantityChange} />
            <button onClick={handleSave}>Salvar</button>
          </>
        ) : (
          <span>{product.quantity}</span>
        )}
      </p>
      {product.quantity < 5 && <p style={{ color: 'red' }}>Estoque baixo!</p>}
      <button onClick={handleEditToggle}>{isEditing ? 'Cancelar' : 'Editar'}</button>
      <button onClick={handleRemove}>Remover</button>
      
    </div>
  );
};

export default ProductItem;
