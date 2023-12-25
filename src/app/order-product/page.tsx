"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const naviagte = useRouter();
  const handleClick = () => {
    console.log("Order Palced Successfully");
    naviagte.replace("/");
  };

  return (
    <>
      <h1>Order Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
