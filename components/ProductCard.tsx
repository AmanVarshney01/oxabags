import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle , CardDescription} from "./ui/card";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug.current}`}
      className="group aspect-square cursor-pointer rounded-lg"
    >
      <Card className="flex flex-col h-full justify-between">
        <CardHeader className="p-2 flex items-center justify-center">
          <div className="relative">
            <Image
              src={urlForImage(product.images)}
              width={200}
              height={200}
              alt={product.name}
              loading="lazy"
              className="aspect-square rounded-md object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <div className="w-full">
            <CardTitle className="text-sm sm:text-base font-medium md:text-lg">{product.name}</CardTitle>
            <CardDescription className="text-sm opacity-90">{product.category.name}</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-2">
          <p className="font-medium text-red-500">₹ {product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
