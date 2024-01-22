import { getProductBySlug } from "@/sanity/lib/sanity.query";
import ProductCarousel from "./ProductCarousel";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/lib/types";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product: Product = await getProductBySlug(slug);
  return (
    <div className="flex w-full flex-col md:flex-row">
      <ProductCarousel product={product} />
      <div className=" flex w-full flex-col space-y-4 p-2 py-4 md:w-1/2 md:px-4 lg:px-12">
        <h1 className="pb-2 text-xl md:text-2xl font-bold">{product.name}</h1>
        <h2 className="pb-1 text-xl font-medium text-red-500">
          Price: ₹ {product.price}
        </h2>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            {/* <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Kings Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Peoples happiness
                </th>
              </tr>
            </thead> */}
            <tbody>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Size:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {product.size}
                </td>
              </tr>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Fabric:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {product.fabric}
                </td>
              </tr>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Color:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {product.color}
                </td>
              </tr>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Weight:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {product.weight}
                </td>
              </tr>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Features:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {product.features}
                </td>
              </tr>
              <tr className="m-0 p-0 even:bg-muted">
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Description:
                </td>
                <td className=" px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {product.description}
                </td>
              </tr>
            </tbody>
          </table>
          {/* <div className="pt-4 px-4">
            <h3 className="pb-1">Description:</h3>
            <p className="">{product.description}</p>
          </div> */}
        </div>
        {/* <div className="flex flex-row space-x-8">
          <div className=" space-y-4">
            <h3 className=" font-medium">Size:</h3>
            <h3 className=" font-medium">Fabric:</h3>
            <h3 className=" font-medium">Color:</h3>
            <h3 className=" font-medium">Weight:</h3>
            <h3 className=" pb-2 font-medium">Features:</h3>
          </div>
          <div className=" space-y-4">
            <p className="">{product.size} </p>
            <p className="">{product.fabric}</p>
            <p className="">{product.color}</p>
            <p className="">{product.weight}</p>
            <p className=" ">{product.features}</p>
          </div>
        </div> */}

        <div className="pt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
