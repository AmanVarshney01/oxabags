"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlForImage } from "@/sanity/lib/image";
import { ProductBySlugQueryResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function ProductCarousel({
  product,
}: {
  product: ProductBySlugQueryResult;
}) {
  return (
    <div className="flex-1 md:w-1/2">
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
          {product?.images!.map((image: any, index: number) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={urlForImage(image).url()}
                  width={1000}
                  height={1000}
                  alt={product?.name!}
                  className="rounded-lg"
                  priority
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
