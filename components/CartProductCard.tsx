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
      {/* <CardHeader className="p-0">
              </CardHeader> */}
      <CardContent className="flex w-full flex-row p-0">
        <Link href={`/product/${product.slug.current}`}>
          <Image
            src={urlForImage(product.images[0])}
            width={100}
            height={100}
            alt={product.name}
            className="rounded-lg"
          />
        </Link>

        <div className="flex flex-col justify-between pl-4">
          <div>
            <div className="line-clamp-2 text-sm font-medium leading-tight sm:text-base">
              {product.name}
            </div>
            <div className=" text-xs opacity-95 sm:text-sm">
              ₹{product.price}
            </div>
          </div>
          <div className="flex w-min flex-row gap-1 rounded-lg border p-1">
            <Button
              className=" h-7 w-7"
              variant={"ghost"}
              size={"icon"}
              onClick={() => removeFromCart(product)}
            >
              <MinusIcon size={18} />
            </Button>
            <span className="min-w-8 px-1 text-center">{product.quantity}</span>
            <Button
              className=" h-7 w-7"
              variant={"ghost"}
              size={"icon"}
              onClick={() => addToCart(product)}
            >
              <PlusIcon size={18} />
            </Button>
          </div>
        </div>
        <div className=" ml-auto mt-auto">
          <Button
            className=" h-7 w-7"
            variant={"destructive"}
            size={"icon"}
            onClick={() => deleteFromCart(product)}
          >
            <DeleteIcon size={18} />
          </Button>
        </div>
      </CardContent>
      {/* <CardFooter className="items-end p-0 flex flex-col">
                <Button
                  className=" h-8 w-8"
                  variant={"destructive"}
                  size={"icon"}
                  onClick={() => removeFromCart(product)}
                >
                  <MinusIcon size={18} />
                </Button>
                <Button
                  className=" h-8 w-8"
                  variant={"default"}
                  size={"icon"}
                  onClick={() => addToCart(product)}
                >
                  <PlusIcon size={18} />
                </Button>
              </CardFooter> */}
    </Card>
  );
}
