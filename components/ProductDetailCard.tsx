import { getProductBySlug } from "@/sanity/lib/sanity.query";
import ProductCarousel from "./ProductCarousel";
import { Button } from "./ui/button";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug);

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      <ProductCarousel product={product} />
      <div className=" flex flex-col space-y-4 w-full md:w-1/2 py-4 px-12">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-medium text-red-500">Price: ₹ {product.price}</p>
        <div className="flex flex-row space-x-8">
          <div className=" space-y-4">
            <p className=" font-medium text-lg">Color:</p>
            <p className=" font-medium text-lg">Size:</p>
            <p className=" font-medium text-lg">Weight:</p>
            <p className=" font-medium text-lg">Weight Carry Capacity:</p>
            <p className=" font-medium text-lg">Fabric:</p>
          </div>
          <div className=" space-y-4">
            <p className=" text-lg">{product.color}</p>
            <p className=" text-lg">{product.size} </p>
            <p className=" text-lg">{product.weight}</p>
            <p className=" text-lg">{product.weightCarryCapacity}</p>
            <p className=" text-lg">{product.fabric}</p>
          </div>
        </div>
        <p className=" ">{product.description}</p>
        <div className="mt-4">
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
