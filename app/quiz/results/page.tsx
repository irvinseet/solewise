import { getRecommendations } from "@/lib/data";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

const medals = ["🥇", "🥈", "🥉"];
const rankLabels = ["Best Match", "Runner-Up", "Also Great"];

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const answers = {
    use: params.use || "",
    level: params.level || "",
    width: params.width || "",
  };
  const recs = getRecommendations(answers);

    console.log("searchParams:", params);
    console.log("answers:", answers);
    console.log("recs:", recs);

  return (
    <div className="page">
      <div className="results-header">
        <div className="results-badge">✓ Analysis Complete</div>
        <h1 className="section-title" style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
          Your Top 3 Matches
        </h1>
        <p style={{ color: "#9b8c7e", fontSize: "0.9rem" }}>
          Based on your answers:&nbsp;
          {Object.entries(answers)
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <span
                key={k}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  background: "#f5f0e8",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "2px",
                  marginRight: "0.35rem",
                }}
              >
                {v}
              </span>
            ))}
        </p>
      </div>

      <AdSlot label="Sponsored — Affiliate Disclosure" />

      <div className="product-grid">
        {recs.map((p, i) => (
          <div
            key={p.id}
            className="product-card"
            style={{ border: i === 0 ? "2px solid #8b6f47" : undefined }}
          >
            <div
              className="product-img"
              style={{ background: i === 0 ? "#f0e8d8" : undefined }}
            >
              <span style={{ fontSize: "2rem", position: "absolute", top: "0.5rem", left: "0.75rem" }}>
                {medals[i]}
              </span>
              <span>{p.image}</span>
            </div>
            <div className="product-body">
              <div className="recommended-rank">{rankLabels[i]}</div>
              <div className="product-brand">{p.brand}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="product-footer">
                <span className="price">${p.price}</span>
                <span className="rating">★ {p.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem", padding: "2rem 0", borderTop: "1px solid #e8e0d4" }}>
        <p style={{ color: "#9b8c7e", marginBottom: "1.25rem", fontSize: "0.9rem" }}>
          Want to explore all options?
        </p>
        <Link href="/shop" className="btn-primary">Browse Full Shop</Link>
        &nbsp;&nbsp;
        <Link href="/quiz" className="btn-secondary">Retake Quiz</Link>
      </div>
    </div>
  );
}
