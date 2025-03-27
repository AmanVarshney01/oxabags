"use client";
import {
  OWNER_PHONE_1,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import Whatsapp from "@/public/whatsapp_logo.svg";
import { PhoneCallIcon, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingBar() {
  const pathname = usePathname();
  const handleShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: SITE_NAME,
        text: SITE_DESCRIPTION,
        url: `${SITE_URL}${pathname}`,
      });
    } else {
      navigator.clipboard.writeText(`${SITE_URL}${pathname}`);
      alert("Link copied to clipboard");
    }
  };

  return (
    <div className="border-border bg-background/95 supports-backdrop-filter:bg-background/90 fixed bottom-2 left-1/2 w-max -translate-x-1/2 transform rounded-full border-2 shadow-md shadow-black/20 backdrop-blur-sm">
      <div className="flex flex-row divide-x p-1">
        <Link
          href={`tel:${OWNER_PHONE_1}`}
          className="flex shrink-0 flex-row items-center space-x-1 p-2"
        >
          <PhoneCallIcon size={20} />
          <span className="text-sm">Call Us</span>
        </Link>
        <Link
          href={`https://wa.me/${OWNER_PHONE_1}`}
          className="flex shrink-0 flex-row items-center space-x-1 p-2"
        >
          <Image
            src={Whatsapp}
            className="dark:invert"
            alt="whatsapp logo"
            width={20}
            height={20}
          />
          <span className="text-sm">Whatsapp</span>
        </Link>
        <button
          onClick={() => handleShare()}
          className="flex shrink-0 flex-row items-center space-x-1 p-2"
        >
          <Share size={20} />
          <span className="text-sm">Share</span>
        </button>
      </div>
      <span className="via-primary absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-linear-to-r from-transparent to-transparent" />
    </div>
  );
}
