"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ item }: { item: any }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${item.slug.current}`);
  };
  return (
    <div
      onClick={handleClick}
      className="group aspect-square flex-none border p-2 rounded-lg cursor-pointer"
      key={item._id}
    >
      <div className="relative">
        <Image
          src={urlForImage(item.images)}
          width={250}
          height={250}
          alt={item.name}
          className="rounded-md"
        />
        <Button variant="secondary" className="absolute shadow bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Quick Add
        </Button>
      </div>
      <div className="pt-4 w-full">
        <h2 className="text-lg font-medium">{item.name}</h2>
        <p className="opacity-90 text-sm">{item.category.name}</p>
        <p className="mt-3 font-medium">₹ {item.price}</p>
      </div>
    </div>
  );
}
