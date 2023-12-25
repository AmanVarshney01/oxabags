"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Billboard() {
  return (
    <div className="flex-1 p-6">
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
            {/* <Image src="/banner-1.webp" alt="" width={1500} height={200} /> */}
            <section className="p-4 flex flex-col gap-8  my-8">
              <h1 className="text-center text-4xl font-bold mb-8">
                CUSTOM LOGO
              </h1>
              <div className="flex justify-center items-center space-x-8 mb-8">
                <Image
                  alt="Choose Bag"
                  className="border-2 border-pink-300 p-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <PlusIcon className="text-gray-500" />
                <Image
                  alt="Confirm Design"
                  className="border-2 border-pink-300 p-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <EqualIcon className="text-gray-500" />
                <Image
                  alt="Final Product"
                  className="border-2 border-pink-300 p-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="lg:flex justify-center items-center space-x-2 mb-8 hidden">
                <Button className="bg-pink-500 text-white">Choose Bag</Button>
                <ArrowRightIcon className="text-gray-500" />
                <Button className="bg-pink-500 text-white">
                  Confirm Design
                </Button>
                <ArrowRightIcon className="text-gray-500" />
                <Button className="bg-pink-500 text-white">Make Order</Button>
                <ArrowRightIcon className="text-gray-500" />
                <Button className="bg-pink-500 text-white">Production</Button>
                <ArrowRightIcon className="text-gray-500" />
                <Button className="bg-pink-500 text-white">Shipment</Button>
              </div>
            </section>
          </CarouselItem>
          <CarouselItem>
            <section className="flex flex-col items-center justify-center text-center my-8 p-4 rounded-md">
              <div>
                <h2 className="text-4xl font-bold mb-2">We Are Eco-Friendly</h2>
                <p className="text-xl text-green-700">
                  Our products are ethically sourced and 100% biodegradable.
                </p>
                <p>
                  Ditch the plastic and go green with our eco-friendly cotton
                  bags.
                </p>
              </div>
            </section>
          </CarouselItem>
          <CarouselItem>
            <section className="flex flex-col items-center justify-center text-center my-8 p-4 rounded-md">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  Special New Year Sale
                </h2>
                <p className="text-xl text-blue-700">
                  Our products are ethically sourced and 100% biodegradable.
                </p>
                <p>
                  Ditch the plastic and go green with our eco-friendly cotton
                  bags.
                </p>
              </div>
            </section>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function EqualIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
