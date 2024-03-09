import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartProductCard from "@/components/cart/CartProductCard";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/store/useCartStore";

export default function CartOrderTable() {
  const { cart, removeFromCart, addToCart, deleteFromCart, totalAmount } =
    useCartStore();
  return (
    <div className="py-2">
      <h1 className="p-2 text-left text-2xl font-bold">Cart</h1>
      {cart.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 gap-2 py-2 md:grid-cols-2 lg:grid-cols-4">
            {cart.map((product: Product, index: number) => (
              <CartProductCard
                key={index}
                product={product}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <h2 className=" p-2 text-xl font-medium">Order Summary</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DESCRIPTION</TableHead>
                  <TableHead className="text-right">UNIT PRICE</TableHead>
                  <TableHead className="text-right">QTY</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((product: Product, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell align="right">₹{product.price}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">
                      ₹{product.price * product.quantity}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>Subtotal</TableCell>
                  <TableCell align="right">₹{totalAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>Shipping Cost</TableCell>
                  <TableCell align="right">FREE</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow className="text-primary">
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right">₹{totalAmount}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      ) : (
        <span className="p-2 ">Empty Cart</span>
      )}
    </div>
  );
}
