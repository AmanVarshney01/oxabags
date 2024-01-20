// import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";

export default function PayNowButton() {
  // const { cart } = useCartStore();
  // let totalAmount = 0;
  // cart.forEach((item: any) => {
  //   totalAmount += item.price * item.quantity;
  // });

  const handleSubmit = async () => {
    try {
      await fetch("/api/razorpay", {
        method: "POST",
        body: JSON.stringify({
          // amount: totalAmount,
        }),
      });
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error here
    }
  };

  return (
    <div>
      <Button className=" " onClick={() => handleSubmit()}>
        Buy Now
      </Button>
    </div>
  );
}
