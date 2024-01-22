import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <Card className="flex h-full flex-col justify-around">
        <CardHeader className="flex items-center justify-center p-1">
          <Image
            src={urlForImage(product.images)}
            width={200}
            height={200}
            alt={product.name}
            loading="lazy"
            className="aspect-square rounded-md object-cover"
          />
        </CardHeader>
        <CardContent className="p-1">
          <CardTitle className="line-clamp-2 text-pretty text-sm sm:text-base font-medium max-w-[200px]">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm opacity-90">
            {product.category.name}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full p-1">
          <p className="font-medium text-primary">₹ {product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
