"use client";
import { notFound } from "next/navigation";

function getrandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getrandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 20) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}
