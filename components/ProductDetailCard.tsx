import { getProductBySlug } from "@/sanity/lib/sanity.query";
import ProductCarousel from "./ProductCarousel";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug);

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      <ProductCarousel product={product} />
      <div className=" flex flex-col space-y-4 w-full md:w-1/2 py-4 md:px-12 px-2">
        <h1 className="text-2xl font-bold pb-2">{product.name}</h1>
        <h2 className="text-xl font-medium text-red-500 pb-1">
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
          <Button className="relative w-full bg-blue-600 hover:opacity-90 hover:bg-blue-600 rounded-full">
            <PlusIcon className="absolute left-0 ml-4 w-6 h-6" />
            <span className="">Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
