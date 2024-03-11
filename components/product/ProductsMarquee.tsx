"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductsMarquee({ products }: { products: Product[] }) {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-2 px-2">
        {products.map((product: Product, index: number) => (
          <CarouselItem className=" basis-auto  pl-2  md:pl-4" key={index}>
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
