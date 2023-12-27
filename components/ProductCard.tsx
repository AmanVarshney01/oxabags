import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProductCard({ item }: { item: any }) {
  return (
    <Link
      href={`/product/${item.slug.current}`}
      className="group aspect-square flex-none cursor-pointer rounded-lg"
    >
      <div className="relative">
        <Image
          src={urlForImage(item.images)}
          width={200}
          height={200}
          alt={item.name}
          loading="lazy"
          className="aspect-square rounded-md"
        />
        <Button
          variant="secondary"
          className="absolute bottom-5 right-5 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100"
        >
          Quick Add
        </Button>
      </div>
      <div className="w-full pt-4">
        <h2 className="text-base font-medium md:text-lg">{item.name}</h2>
        <p className="text-sm opacity-90">{item.category.name}</p>
        <p className="mt-3 font-medium">₹ {item.price}</p>
      </div>
    </Link>
  );
}
