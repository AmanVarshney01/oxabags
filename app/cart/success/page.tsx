import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export const runtime = "edge"

export default function SuccessPage({
  searchParams,
}: {
  searchParams: {
    name: string;
    email: string;
    phoneNumber: string;
    short_url: string;
  };
}) {
  const email = searchParams.email;
  const phoneNumber = searchParams.phoneNumber;
  const short_url = searchParams.short_url;
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-2 py-16 md:py-24">
      <div className="rounded-full bg-green-400 p-8">
        <Check size={100} />
      </div>
      <h1 className=" text-center text-4xl md:text-6xl">
        Thank you for your order
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-secondary p-4">
        <p className="text-center text-lg">
          The order details and a link to the payment has been sent to your{" "}
          <span className="underline">{email}</span> and{" "}
          <span className="underline">{phoneNumber}</span>
        </p>
        <div className="mt-4 flex flex-row gap-2">
          <a href={short_url} target="_blank" rel="noopener noreferrer">
            <Button>Open Invoice</Button>
          </a>
          <Link href={"/"}>
            <Button variant={"secondary"}>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
