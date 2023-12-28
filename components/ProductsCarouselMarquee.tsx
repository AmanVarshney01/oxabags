"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ProductCard";

export default function ProductCarouselMarquee({ products }: any) {
  return (
    <Carousel>
      <CarouselContent>
        {products.map((product: any, index: number) => (
          <CarouselItem
            className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
            key={index}
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 opacity-70 md:-left-6" />
      <CarouselNext className="right-2 opacity-70 md:-right-6" />
    </Carousel>
  );
}
