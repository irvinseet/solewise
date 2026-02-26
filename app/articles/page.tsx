import { getArticles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = getArticles();
  const [featured, ...rest] = articles;

  return (
    <div className="page">
      <span className="section-label">Knowledge Base</span>
      <h1 className="section-title">Barefoot Guides & Reviews</h1>

      {/* Featured article */}
      <Link
        href={`/articles/${featured.slug}`}
        className="article-card"
        style={{
          padding: "2rem",
          marginBottom: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div style={{ background: "#f5f0e8", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", minHeight: "200px" }}>
          📖
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="article-cat">{featured.category}</div>
          <div className="article-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{featured.title}</div>
          <div className="article-excerpt">{featured.excerpt}</div>
          <div className="article-meta" style={{ marginTop: "1rem" }}>
            <span>{featured.date}</span>
            <span>{featured.readTime} read</span>
          </div>
        </div>
      </Link>

      <AdSlot />

      <div className="article-grid">
        {rest.map((a) => <ArticleCard key={a.slug} article={a} />)}
      </div>
    </div>
  );
}
