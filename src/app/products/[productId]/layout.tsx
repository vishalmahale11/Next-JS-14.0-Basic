export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
        <h2>Featured Products</h2>
      </div>
    </>
  );
}
