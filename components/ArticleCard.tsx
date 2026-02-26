import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="article-card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="article-cat">{article.category}</div>
      <div className="article-title">{article.title}</div>
      <div className="article-excerpt">{article.excerpt}</div>
      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.readTime} read</span>
      </div>
    </Link>
  );
}
