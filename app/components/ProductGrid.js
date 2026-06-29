'use client';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="products-empty">
        <p className="products-empty-text">No products yet. Add your first product to get started.</p>
      </div>
    );
  }
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
}
