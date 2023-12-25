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
    <div className="p-6 pt-0 flex flex-col gap-8">
      {/* <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image src="/banner-1.webp" alt="" width={1500} height={200} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/banner-1.webp" alt="" width={1500} height={200} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/banner-1.webp" alt="" width={1500} height={200} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <h1 className="text-center text-7xl font-bold mb-8">CUSTOM LOGO</h1>
      <div className="flex justify-center items-center space-x-8 mb-8">
        <Image
          alt="Choose Bag"
          className="border-2 border-pink-300 p-2"
          height="250"
          src="/placeholder.svg"
          style={{
            aspectRatio: "250/250",
            objectFit: "cover",
          }}
          width="250"
        />
        <PlusIcon className="text-gray-500" />
        <Image
          alt="Confirm Design"
          className="border-2 border-pink-300 p-2"
          height="250"
          src="/placeholder.svg"
          style={{
            aspectRatio: "250/250",
            objectFit: "cover",
          }}
          width="250"
        />
        <EqualIcon className="text-gray-500" />
        <Image
          alt="Final Product"
          className="border-2 border-pink-300 p-2"
          height="250"
          src="/placeholder.svg"
          style={{
            aspectRatio: "250/250",
            objectFit: "cover",
          }}
          width="250"
        />
      </div>
      <div className="flex justify-center items-center space-x-2 mb-8">
        <Button className="bg-pink-500 text-white">Choose Bag</Button>
        <ArrowRightIcon className="text-gray-500" />
        <Button className="bg-pink-500 text-white">Confirm Design</Button>
        <ArrowRightIcon className="text-gray-500" />
        <Button className="bg-pink-500 text-white">Make Order</Button>
        <ArrowRightIcon className="text-gray-500" />
        <Button className="bg-pink-500 text-white">Production</Button>
        <ArrowRightIcon className="text-gray-500" />
        <Button className="bg-pink-500 text-white">Shipment</Button>
      </div>
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
