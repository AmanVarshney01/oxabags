"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function ProductCarousel({ product }: any) {
  return (
    <div className="p-4 md:w-1/2 flex-1">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {product.images.map((image: any, index: number) => (
            <CarouselItem key={index}>
              <Image
                src={urlForImage(image)}
                width={1000}
                height={1000}
                alt={product.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
