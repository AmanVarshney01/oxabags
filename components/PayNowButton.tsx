import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";

export default function PayNowButton() {
  const { cart } = useCartStore();
  let totalAmount = 0;
  cart.forEach((item: any) => {
    totalAmount += item.price * item.quantity;
  });
  // async function handlePayment() {
  //   const data = await fetch("/api/razorpay?amount=" + totalAmount);
  //   const { order } = await data?.json();
  //   const options = {
  //     key: process.env.RAZORPAY_KEY,
  //     amount: order.amount,
  //     currency: order.currency,
  //     name: "Your Store Name",
  //     description: "Order Payment",
  //     order_id: order.id,
  //     handler: async function (response: any) {
  //       const data = await fetch("/api/paymentverify", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           razorpayPaymentId: response.razorpay_payment_id,
  //           razorpayOrderId: response.razorpay_order_id,
  //           razorpaySignature: response.razorpay_signature,
  //           email: "amanyoyoyo@gmail.com",
  //         }),
  //       });

  //       // const res = await data.json();
  //       // if (res?.error === false) {
  //       //   router.push("/");
  //       // }
  //     },
  //     prefill: {
  //       name: "Customer Name",
  //       email: "customer@example.com",
  //       contact: "9999999999",
  //     },
  //     theme: {
  //       color: "#121212",
  //     },
  //     notes: {
  //       cart_items: JSON.stringify(
  //         cart.map((item: any) => ({
  //           name: item.name,
  //           quantity: item.quantity,
  //           price: item.price,
  //         })),
  //       ),
  //     },
  //   };
  //   const paymentObject = new (window as any).Razorpay(options);
  //   paymentObject.open();
  // }

  const createAndSendInvoice = async () => {
    try {
      await fetch("/api/razorpay");
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error here
    }
  };

  return (
    <div>
      <Button
        className=" h-8 w-8"
        variant={"default"}
        size={"icon"}
        onClick={() => createAndSendInvoice()}
      >
        Pay Now
      </Button>
    </div>
  );
  return (
    <div>
      <Button
        className=" h-8 w-8"
        variant={"default"}
        size={"icon"}
        onClick={() => createAndSendInvoice()}
      >
        Pay Now
      </Button>
    </div>
  );
}
