import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";


export default function ProductCard({ item }: { item: any}) {
  return (
    <div className="group aspect-square flex-none relative" key={item._id}>
      <div className="relative">
        <Image
          src={urlForImage(item.images)}
          width={250}
          height={250}
          alt={item.name}
        />
        <Button className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Quick Add
        </Button>
      </div>
      <div className="py-4 w-full">
        <h2 className="text-lg font-medium">{item.name}</h2>
        <p className="opacity-90 text-sm">₹ {item.price}</p>
      </div>
    </div>
  );
}
