import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <h1>Products Page</h1>
      <Link href="/products/1">Product1</Link>
      <Link href="/products/2">Product2</Link>
      <Link href="/products/3" replace>
        Product3
      </Link>
      <Link href={`products/${productId}`}>{`Product ${productId}`}</Link>
    </>
  );
}
