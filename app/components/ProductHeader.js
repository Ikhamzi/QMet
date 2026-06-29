'use client';
import { useRouter } from 'next/navigation';

export default function ProductHeader({ title = 'Products', showAdd = true }) {
  const router = useRouter();
  return (
    <div className="products-header">
      <h1 className="products-title">{title}</h1>
      {showAdd && (
        <button className="btn btn-primary" onClick={() => router.push('/products/new')}>
          Add New Product
        </button>
      )}
    </div>
  );
}
