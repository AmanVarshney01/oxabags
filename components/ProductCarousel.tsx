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
import { Product } from "@/lib/types";

export default function ProductCarousel({ product }: { product: Product }) {
  return (
    <div className="flex-1 md:w-1/2 p-2">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
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
                className="rounded-lg"
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
