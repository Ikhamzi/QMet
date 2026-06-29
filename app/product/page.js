'use client';
import { useState, useEffect } from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductGrid   from '../components/ProductGrid';
import { seedProducts, getProducts, deleteProduct } from '../lib/productStorage';
import './products.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    seedProducts();
    setProducts(getProducts());
    setMounted(true);
  }, []);

  function handleDelete(slug) {
    deleteProduct(slug);
    setProducts(getProducts());
  }

  if (!mounted) return null;

  return (
    <section className="products-page">
      <div className="container">
        <ProductHeader />
        <ProductGrid products={products} onDelete={handleDelete} />
      </div>
    </section>
  );
}
