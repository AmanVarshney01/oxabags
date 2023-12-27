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
import Autoplay from "embla-carousel-autoplay";

export default function ProductCarousel({ product }: any) {
  return (
    <div className="flex-1 p-2 md:w-1/2 md:p-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
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
