'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProductHeader from '@/components/ProductHeader';
import ProductForm   from '@/components/ProductForm';
import { findProductBySlug, updateProduct } from '@/lib/productStorage';
import '../../products.css';

export default function EditProductPage() {
  const router        = useRouter();
  const { slug }      = useParams();
  const [product,    setProduct]  = useState(null);
  const [notFound,   setNotFound] = useState(false);

  useEffect(() => {
    const found = findProductBySlug(slug);
    found ? setProduct(found) : setNotFound(true);
  }, [slug]);

  function handleSave(formData) {
    updateProduct(slug, formData);
    router.push('/products');
  }

  if (notFound) return (
    <section className="products-page">
      <div className="container"><p className="products-empty-text">Product not found.</p></div>
    </section>
  );

  if (!product) return null;

  return (
    <section className="products-page">
      <div className="container">
        <ProductHeader title={`Edit — ${product.title}`} showAdd={false} />
        <ProductForm initialData={product} onSave={handleSave} mode="edit" />
      </div>
    </section>
  );
}
