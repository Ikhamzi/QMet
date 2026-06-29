'use client';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product, onDelete }) {
  const router = useRouter();

  const overview =
    product.overview?.length > 120
      ? product.overview.slice(0, 120) + '…'
      : product.overview || 'No overview provided.';

  function handleEdit(e) {
    e.stopPropagation();
    router.push(`/products/edit/${product.slug}`);
  }

  function handleDelete(e) {
    e.stopPropagation();
    if (window.confirm(`Delete "${product.title}"? This cannot be undone.`)) {
      onDelete(product.slug);
    }
  }

  return (
    <div
      className="product-card"
      onClick={() => router.push(`/products/${product.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && router.push(`/products/${product.slug}`)}
    >
      <div className="product-card-body">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-overview">{overview}</p>
      </div>
      <div className="product-card-actions">
        <button className="btn-edit" onClick={handleEdit}>Edit</button>
        <button className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
