import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home page</h1>
      <Link href="/blog"> Blog</Link>
      <Link href="/products"> Products</Link>
      <Link href="/register">Register</Link>
    </>
  );
}
