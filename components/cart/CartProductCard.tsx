import { urlForImage } from "@/sanity/lib/image";
import { DeleteIcon, MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CartProduct } from "@/store/useCartStore";

export default function CartProductCard({
  product,
  addToCart,
  removeFromCart,
  deleteFromCart,
}: {
  addToCart: (Item: CartProduct) => void;
  removeFromCart: (Item: CartProduct) => void;
  deleteFromCart: (Item: CartProduct) => void;
} & { product: CartProduct }) {
  return (
    <Card className="mb-2 p-1">
      <CardContent className="grid w-full grid-cols-[auto_1fr] p-0">
        <Link className="min-w-fit" href={`/product/${product.slug!.current}`}>
          <Image
            src={urlForImage(product?.images?.[0]!).url()}
            width={100}
            height={100}
            alt={product.name!}
            priority
            className="rounded-lg"
          />
        </Link>
        <div className="flex flex-col justify-between gap-2 pl-2 md:pl-4">
          <div className="w-full">
            <div className="line-clamp-2 text-sm font-medium leading-tight">
              {product.name}
            </div>
            <div className="mt-1 text-sm text-primary opacity-95">
              ₹{product.price}
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-1">
            <div className="flex w-min flex-row gap-1 rounded-lg border p-1">
              <Button
                className="h-5 w-5"
                variant={"ghost"}
                size={"icon"}
                onClick={() => addToCart(product)}
              >
                <PlusIcon size={15} />
              </Button>
              <span className="min-w-5 px-1 text-center text-sm">
                {product.quantity}
              </span>
              <Button
                className="h-5 w-5"
                variant={"ghost"}
                size={"icon"}
                onClick={() => removeFromCart(product)}
              >
                <MinusIcon size={15} />
              </Button>
            </div>
            <Button
              className="h-6 w-6"
              variant={"destructive"}
              size={"icon"}
              onClick={() => deleteFromCart(product)}
            >
              <DeleteIcon size={15} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
