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
        {products.map((item: any, index: number) => (
          <CarouselItem
            className="basis-1/3 md:basis-1/5 lg:basis-1/6"
            key={index}
          >
            <ProductCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 opacity-70 md:-left-6" />
      <CarouselNext className="right-0 opacity-70 md:-right-6" />
    </Carousel>
  );
}
