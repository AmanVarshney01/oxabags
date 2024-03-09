import { PhoneCallIcon } from "lucide-react";
import Whatsapp from "@/public/whatsapp_logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function FloatingBar() {
  return (
    <div className="fixed bottom-2 left-1/2 w-max -translate-x-1/2 transform rounded-full border-2 border-border bg-background/95 shadow-md shadow-black/20 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="flex flex-row divide-x p-1">
        <Link
          href="tel:9868151526"
          className="flex shrink-0 flex-row items-center space-x-1 p-2"
        >
          <PhoneCallIcon size={20} />
          <span className=" text-sm">Call Us</span>
        </Link>
        <Link
          href={"https://wa.me/9868151526"}
          className="flex shrink-0 flex-row items-center space-x-1 p-2"
        >
          <Image src={Whatsapp} className=" dark:invert" alt="whatsapp logo" width={20} height={20} />
          <span className=" text-sm">Whatsapp</span>
        </Link>
      </div>
      <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary  to-transparent" />
    </div>
  );
}
