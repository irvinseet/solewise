"use client";

import { useState } from "react";
import Link from "next/link";
import { getProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import AdSlot from "@/components/AdSlot";

const uses = ["all", "running", "trail", "everyday", "casual", "hiking"];

export default function ShopPage() {
  const products = getProducts();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.use === filter || p.tags.includes(filter));

  return (
    <div className="page">
      <span className="section-label">The Collection</span>
      <h1 className="section-title">Barefoot Shoe Shop</h1>

      <div style={{ background: "#fff8e8", border: "1px solid #e0d0b0", borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "2.5rem" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#9b8c7e", textTransform: "uppercase" }}>
          🚧 Shop launching soon — Stripe checkout coming Q2 2025
        </span>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        {uses.map((u) => (
          <button
            key={u}
            onClick={() => setFilter(u)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.45rem 1rem",
              border: `1px solid ${filter === u ? "#8b6f47" : "#e0d8cc"}`,
              background: filter === u ? "#8b6f47" : "white",
              color: filter === u ? "#f5f0e8" : "#9b8c7e",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {u === "all" ? "All" : u}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <AdSlot label="Affiliate Links — Disclosure: We earn a commission" />

      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <p style={{ color: "#9b8c7e", marginBottom: "1rem", fontSize: "0.9rem" }}>Not sure what to choose?</p>
        <Link href="/quiz" className="btn-primary">Take the Recommender Quiz</Link>
      </div>
    </div>
  );
}
