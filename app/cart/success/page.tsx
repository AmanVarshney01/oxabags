"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phoneNumber = searchParams.get("phoneNumber");
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-2 py-16 md:py-24">
      <div className="rounded-full bg-green-400 p-8">
        <Check size={100} />
      </div>
      <h1 className=" text-center text-4xl md:text-6xl">
        Thank you for your order
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 border rounded-lg border-dashed border-green-400 p-4">
        <p className="text-center text-lg">
          The order details and a link to the payment has been sent to your{" "}
          <span className="underline">{email}</span> and{" "}
          <span className="underline">{phoneNumber}</span>
        </p>
        <Link href={"/"}>
          <Button className="mt-4">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
