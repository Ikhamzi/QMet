'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { findProductBySlug } from '@/lib/productStorage';
import '../products.css';

const SECTIONS = [
  { key: 'overview',               label: 'Overview'                },
  { key: 'requirements',           label: 'Requirements'            },
  { key: 'implementationGuidance', label: 'Implementation Guidance' },
  { key: 'consultingServices',     label: 'Consulting Services'     },
  { key: 'trainingPrograms',       label: 'Training Programs'       },
  { key: 'templates',              label: 'Templates'               },
  { key: 'checklists',             label: 'Checklists'              },
  { key: 'faqs',                   label: 'FAQs'                    },
  { key: 'articles',               label: 'Articles'                },
  { key: 'caseStudies',            label: 'Case Studies'            },
];

export default function ProductDetailPage() {
  const router       = useRouter();
  const { slug }     = useParams();
  const [product,  setProduct]  = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const found = findProductBySlug(slug);
    found ? setProduct(found) : setNotFound(true);
  }, [slug]);

  if (notFound) return (
    <section className="products-page">
      <div className="container"><p className="products-empty-text">Product not found.</p></div>
    </section>
  );

  if (!product) return null;

  return (
    <section className="products-page">
      <div className="container">
        <div className="product-detail-nav">
          <button className="btn btn-secondary" onClick={() => router.push('/products')}>
            ← Back to Products
          </button>
          <button className="btn btn-primary" onClick={() => router.push(`/products/edit/${product.slug}`)}>
            Edit Product
          </button>
        </div>

        <h1 className="product-detail-title">{product.title}</h1>

        <div className="product-detail-sections">
          {SECTIONS.map(({ key, label }) =>
            product[key] ? (
              <div key={key} className="product-detail-section">
                <h2 className="product-detail-section-title">{label}</h2>
                <p className="product-detail-section-body">{product[key]}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
