import { getProductBySlug, getProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="page" style={{ maxWidth: "700px" }}>
      <Link href="/shop" className="btn-ghost" style={{ marginBottom: "2rem", display: "inline-block" }}>← Back to Shop</Link>
      <div style={{ fontSize: "6rem", textAlign: "center", background: "#f5f0e8", borderRadius: "4px", padding: "3rem", marginBottom: "2rem" }}>{product.image}</div>
      <div className="product-brand">{product.brand}</div>
      <h1 className="section-title">{product.name}</h1>
      <div className="product-tags" style={{ marginBottom: "1.5rem" }}>
        {product.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <div><span className="section-label">Price</span><span className="price">${product.price}</span></div>
        <div><span className="section-label">Rating</span><span className="rating">★ {product.rating}</span></div>
        <div><span className="section-label">Heel Drop</span><span className="price">{product.drop}mm</span></div>
        <div><span className="section-label">Width</span><span className="price">{product.width}</span></div>
      </div>
      <Link href="/quiz" className="btn-primary">Find More Like This</Link>
    </div>
  );
}
