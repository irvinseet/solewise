import Link from "next/link";
import { getProducts, getArticles } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";

export default function HomePage() {
  const products = getProducts().slice(0, 4);
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">🦶 The Barefoot Shoe Guide</span>
          <h1>Find Your<br /><em>Perfect</em> Barefoot Shoe</h1>
          <p>Navigate the world of zero-drop, wide toe-box footwear with personalized recommendations and expert guides.</p>
          <div className="hero-ctas">
            <Link href="/quiz" className="btn-primary">Take the Quiz →</Link>
            <Link href="/articles" className="btn-secondary">Read the Guides</Link>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="feature-strip">
          {[
            { icon: "🎯", title: "Personalized Quiz", desc: "Answer 3 questions. Get 3 perfect matches." },
            { icon: "📚", title: "Expert Guides", desc: "Evidence-based transition guides & reviews." },
            { icon: "🏪", title: "Curated Shop", desc: "Hand-picked barefoot brands, vetted by us." },
            { icon: "🌿", title: "Honest Reviews", desc: "No sponsored content. Ever. Just the truth." },
          ].map((f) => (
            <div key={f.title} className="feature-item">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <span className="section-label">Featured Shoes</span>
        <h2 className="section-title">Top Picks Right Now</h2>
        <div className="product-grid">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/shop" className="btn-secondary">View All Shoes</Link>
        </div>

        <AdSlot />

        <span className="section-label" style={{ marginTop: "3rem", display: "block" }}>From the Blog</span>
        <h2 className="section-title">Learn Before You Buy</h2>
        <div className="article-grid">
          {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </div>
    </>
  );
}
