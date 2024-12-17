import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import AddToCartButton from "../cart/AddToCartButton";
import ProductCarousel from "./ProductCarousel";
import { ProductBySlugQueryResult } from "@/sanity/types";

export default function ProductDetailCard({
  product,
}: {
  product: ProductBySlugQueryResult;
}) {
  return (
    <section className="flex w-full flex-col py-4 md:flex-row">
      <ProductCarousel product={product} />
      <div className="flex w-full flex-col space-y-2 px-0 py-2 md:w-1/2 md:px-4 lg:px-12">
        <h1 className="p-2 text-xl font-bold md:text-2xl">{product?.name}</h1>
        <h2 className="p-2 text-xl font-medium text-primary">
          Price: ₹ {product?.price}
          <span className="px-2 text-xs text-foreground">(including GST)</span>
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-nowrap">Product Code:</TableCell>
              <TableCell>{product?.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Size:</TableCell>
              <TableCell>{product?.size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fabric:</TableCell>
              <TableCell>{product?.fabric}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Color:</TableCell>
              <TableCell>{product?.color}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight:</TableCell>
              <TableCell>{product?.weight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Features:</TableCell>
              <TableCell>{product?.features}</TableCell>
            </TableRow>
            {product?.description == null ? null : (
              <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>{product?.description}</TableCell>
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
