import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { PlusIcon, MinusIcon, DeleteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartproductCard({
  product,
  addToCart,
  removeFromCart,
  deleteFromCart,
}: any) {
  return (
    <Card className="mb-2 flex flex-row p-1">
      <CardContent className="flex w-full flex-row p-0">
        <Link className=" shrink-0" href={`/product/${product.slug.current}`}>
          <Image
            src={urlForImage(product.images[0])}
            width={100}
            height={100}
            alt={product.name}
            loading="lazy"
            className="rounded-lg"
          />
        </Link>
        <div className="flex flex-col justify-between pl-4">
          <div>
            <div className="line-clamp-2 text-sm font-medium mb-1 leading-tight">
              {product.name}
            </div>
            <div className="text-sm opacity-95 text-primary">₹{product.price}</div>
          </div>
          <div className="flex w-min flex-row gap-1 rounded-lg border p-1">
            <Button
              className=" h-5 w-5"
              variant={"ghost"}
              size={"icon"}
              onClick={() => removeFromCart(product)}
            >
              <MinusIcon size={15} />
            </Button>
            <span className="min-w-5 px-1 text-sm text-center">{product.quantity}</span>
            <Button
              className=" h-5 w-5"
              variant={"ghost"}
              size={"icon"}
              onClick={() => addToCart(product)}
            >
              <PlusIcon size={15} />
            </Button>
          </div>
        </div>
        <div className=" ml-auto mt-auto">
          <Button
            className="h-5 w-5"
            variant={"destructive"}
            size={"icon"}
            onClick={() => deleteFromCart(product)}
          >
            <DeleteIcon size={15} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
