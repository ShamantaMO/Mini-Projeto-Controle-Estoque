import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-product">Novo Produto</Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
