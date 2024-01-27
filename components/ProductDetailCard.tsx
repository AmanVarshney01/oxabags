import { getProductBySlug } from "@/sanity/lib/sanity.query";
import ProductCarousel from "./ProductCarousel";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/lib/types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default async function ProductDetailCard({ slug }: { slug: string }) {
  const product: Product = await getProductBySlug(slug);

  return (
    <section className="flex w-full flex-col md:flex-row py-4">
      <ProductCarousel product={product} />
      <div className=" flex w-full flex-col space-y-2 px-2 py-2 md:w-1/2 md:px-4 lg:px-12">
        <h1 className="pb-2 text-xl font-bold md:text-2xl">{product.name}</h1>
        <h2 className="pb-1 text-xl font-medium text-red-500">
          Price: ₹ {product.price}
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className=" text-nowrap">Product Code:</TableCell>
              <TableCell>{product.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Size:</TableCell>
              <TableCell>{product.size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fabric:</TableCell>
              <TableCell>{product.fabric}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Color:</TableCell>
              <TableCell>{product.color}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight:</TableCell>
              <TableCell>{product.weight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Features:</TableCell>
              <TableCell>{product.features}</TableCell>
            </TableRow>
            {product.description == null ? null : (
              <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="pt-2">
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
