import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link
      href={`/product/${product.slug.current}`}
      className="group aspect-square cursor-pointer rounded-lg"
    >
      <div className="relative">
        <Image
          src={urlForImage(product.images)}
          width={200}
          height={200}
          alt={product.name}
          loading="lazy"
          className="aspect-square rounded-md"
        />
        {/* <Button
          variant="secondary"
          className="absolute bottom-5 right-5 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100"
        >
          Quick Add
        </Button> */}
      </div>
      <div className="w-full pt-4">
        <h2 className="text-base font-medium md:text-lg">{product.name}</h2>
        <p className="text-sm opacity-90">{product.category.name}</p>
        <p className="mt-2 font-medium">₹ {product.price}</p>
      </div>
    </Link>
  );
}
