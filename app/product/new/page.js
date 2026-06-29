'use client';
import { useRouter } from 'next/navigation';
import ProductHeader from '@/components/ProductHeader';
import ProductForm   from '@/components/ProductForm';
import { addProduct } from '@/lib/productStorage';
import '../products.css';

export default function NewProductPage() {
  const router = useRouter();

  function handleSave(formData) {
    addProduct(formData);
    router.push('/products');
  }

  return (
    <section className="products-page">
      <div className="container">
        <ProductHeader title="Add New Product" showAdd={false} />
        <ProductForm onSave={handleSave} mode="add" />
      </div>
    </section>
  );
}
