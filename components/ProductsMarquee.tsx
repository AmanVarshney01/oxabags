"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductsMarquee({ products }: { products: Product[] }) {
  return (
    <Carousel opts={{
      dragFree: true,
    }}>
      <CarouselContent className="px-2 -ml-2">
        {products.map((product: Product, index: number) => (
          <CarouselItem
            className="basis-1/2 pl-2 md:pl-4 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
            key={index}
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0"/>
      <CarouselNext className="right-0"/>
    </Carousel>
  );
}
