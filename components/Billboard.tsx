"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Billboard() {
  return (
    <div className="flex-1 md:p-6 p-2">
      <Carousel
        opts={{
          loop: true,
          align: "start",
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
          <CarouselItem>
            <Image
              className="w-full rounded-lg"
              src="/customize.jpg"
              alt=""
              width={800}
              height={200}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="w-full rounded-lg"
              src="/Eco-Friendly.jpg"
              alt=""
              width={800}
              height={200}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
