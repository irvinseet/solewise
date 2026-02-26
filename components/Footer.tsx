import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">solewise</div>
      <p>© 2025 Solewise — Your barefoot shoe guide</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/quiz">Quiz</Link>
      </nav>
    </footer>
  );
}
