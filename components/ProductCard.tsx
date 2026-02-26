import Link from "next/link";

type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  tags: string[];
  rating: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="product-card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-img">{product.image}</div>
      <div className="product-body">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-tags">
          {product.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="product-footer">
          <span className="price">${product.price}</span>
          <span className="rating">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
}
