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
    <div className="flex-1 p-2 md:p-6">
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
              width={1920}
              height={960}
              priority
              // placeholder="blur"
              // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88vF1PQAJAgNRE3UdwgAAAABJRU5ErkJggg=="
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="w-full rounded-lg"
              src="/Eco-Friendly.jpg"
              alt=""
              width={1920}
              height={960}
              priority
              // placeholder="blur"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
