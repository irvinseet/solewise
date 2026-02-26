import { getArticleBySlug, getArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

// Generates static pages at build time for each article slug
export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <div className="article-hero">
        <span className="section-label" style={{ color: "#8b6f47" }}>{article.category}</span>
        <h1>{article.title}</h1>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#9b8c7e", letterSpacing: "0.1em", marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
          <span>{article.date}</span>
          <span>{article.readTime} read</span>
        </div>
      </div>

      <div className="page">
        <AdSlot label="Advertisement" />

        <div className="article-content">
          <p>{article.excerpt} This guide covers everything you need to get started on your barefoot journey — from understanding the key features to look for, to transitioning safely without injury.</p>
          <h2>Why Barefoot Footwear?</h2>
          <p>Conventional shoes have altered the way we walk. With elevated heels, arch support, and narrow toe boxes, modern footwear encourages a heel-strike gait pattern that places excessive stress on the joints. Barefoot shoes aim to restore natural movement by removing these artificial constraints.</p>
          <h2>Key Features to Look For</h2>
          <p>When evaluating barefoot shoes, four attributes matter most: <strong>zero heel drop</strong> (heel and toe at the same height), a <strong>wide toe box</strong> that allows toes to splay naturally, <strong>thin flexible soles</strong> that transmit ground feedback, and <strong>minimal cushioning</strong> that doesn&apos;t interfere with proprioception.</p>
          <h2>How to Transition Safely</h2>
          <p>The most important rule of transitioning to barefoot footwear is to go slowly. Your feet, calves, and Achilles tendons have adapted to conventional shoes over years — possibly decades. Rushing the transition is the number-one cause of injury. Start by wearing your barefoot shoes for 30 minutes per day, gradually increasing over 8–12 weeks.</p>
          <p>Walk before you run. Literally. Get comfortable walking in your new shoes before attempting any running. Focus on landing with a midfoot or forefoot strike, and let your foot muscles — muscles that may have been dormant for years — gradually build strength.</p>
        </div>

        <AdSlot label="Affiliate — Related Products" />

        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <p style={{ color: "#9b8c7e", marginBottom: "1rem" }}>Ready to find your shoe?</p>
          <Link href="/quiz" className="btn-primary">Take the Quiz →</Link>
          &nbsp;&nbsp;
          <Link href="/articles" className="btn-secondary">More Articles</Link>
        </div>
      </div>
    </>
  );
}
