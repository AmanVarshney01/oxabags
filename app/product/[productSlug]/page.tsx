"use client";

import React, { Suspense } from "react";
import ProductDetailCard from "@/components/ProductDetailCard";
import { usePathname } from "next/navigation";

const ProductPage = () => {
  const pathname = usePathname();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailCard slug={pathname?.split("/product/")[1] ?? ''} />
    </Suspense>
  );
}

export default ProductPage;
