import { getProductBySlug } from "@/sanity/lib/sanity.query";
import ProductCarousel from "./ProductCarousel";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug);

  return (
    <div className="flex w-full flex-col p-4 md:flex-row">
      <ProductCarousel product={product} />
      <div className=" flex w-full flex-col space-y-4 px-2 py-4 md:w-1/2 md:px-12">
        <h1 className="pb-2 text-2xl font-bold">{product.name}</h1>
        <h2 className="pb-1 text-xl font-medium text-red-500">
          Price: ₹ {product.price}
        </h2>
        <div className="flex flex-row space-x-8">
          <div className=" space-y-4">
            <p className=" font-medium">Color:</p>
            <p className=" font-medium">Size:</p>
            <p className=" font-medium">Weight:</p>
            <p className=" font-medium">Weight Carry Capacity:</p>
            <p className=" font-medium">Fabric:</p>
          </div>
          <div className=" space-y-4">
            <p className="">{product.color}</p>
            <p className="">{product.size} </p>
            <p className="">{product.weight}</p>
            <p className="">{product.weightCarryCapacity}</p>
            <p className="">{product.fabric}</p>
          </div>
        </div>
        <p className=" ">{product.description}</p>
        <div className="pt-4">
          <Button
            variant={"outline"}
            className="relative w-full rounded-full text-blue-600 border border-blue-600 shadow hover:opacity-90"
          >
            <PlusIcon className="absolute left-0 ml-4 h-6 w-6" />
            <span className="">Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
