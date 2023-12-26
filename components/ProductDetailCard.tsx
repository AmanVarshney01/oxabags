import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { getProductBySlug } from "@/sanity/lib/sanity.query";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug);

  return (
    <>
      {product && (
        <div className="flex flex-col md:flex-row w-full p-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="md:w-1/2 mx-auto p-6 flex-1"
          >
            <CarouselContent>
              {product.images.map((image: any, index: number) => (
                <CarouselItem key={index}>
                  <Image
                    src={urlForImage(image)}
                    width={1000}
                    height={1000}
                    alt={product.name}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className=" flex flex-col space-y-4 w-full md:w-1/2 py-4 px-12">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-lg font-medium">₹ {product.price}</p>
            {/* <p className="text-sm opacity-90">{product.category.name}</p>
            <p className="text-sm opacity-90">{product.description}</p>
            <p className="text-sm opacity-90">{product.color}</p>
            <p className="text-sm opacity-90">{product.size}</p>
            <p className="text-sm opacity-90">{product.weight}</p> */}
            <p>
              Color: <span>{product.color}</span>
            </p>
            <p>
              Size: <span>{product.size}</span>
            </p>
            <p>
              Weight: <span>{product.weight}</span>
            </p>
            <p>{product.description}</p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-gray-100 rounded-md shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
