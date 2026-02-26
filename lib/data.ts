import { dummyProducts, dummyArticles, dummyQuiz } from "./dummy";

export function getProducts() {
  return dummyProducts;
}

export function getArticles() {
  return dummyArticles;
}

export function getArticleBySlug(slug: string) {
  return dummyArticles.find((a) => a.slug === slug) || null;
}

export function getProductBySlug(slug: string) {
  return dummyProducts.find((p) => p.slug === slug) || null;
}

export function getQuiz() {
  return dummyQuiz;
}

export function getRecommendations(answers: Record<string, string>) {
  const scored = dummyProducts.map((p) => {
    let score = 0;
    if (answers.use && (p.use === answers.use || p.tags.includes(answers.use))) score += 3;
    if (answers.level && p.level === answers.level) score += 2;
    if (answers.width && p.width === answers.width) score += 2;
    else if (answers.width === "extra-wide" && p.width === "wide") score += 1;
    return { ...p, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
