"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FeaturedProductsQueryResult,
  ProductBySlugQueryResult,
} from "@/sanity/types";
import ProductCard from "./ProductCard";

export default function ProductsMarquee({
  products,
}: {
  products: ProductBySlugQueryResult[] | FeaturedProductsQueryResult;
}) {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-2 px-2">
        {products?.map((product, index: number) => (
          <CarouselItem
            className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 md:pl-4 lg:basis-1/5"
            key={index}
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
