import { MailIcon, PhoneCallIcon } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";

export default function Footer() {
  return (
    <footer className=" border-t py-5 md:px-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold">Contact Us</h2>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <MailIcon size={16} />
              <p>info@amanasia.com</p>
            </div>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <PhoneCallIcon size={16} />
              <p>9868151526</p>
            </div>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <PhoneCallIcon size={16} />
              <p>9811365888</p>
            </div>
            <div>
              <Link
                href={"https://wa.me/9868151526"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  priority
                  className="rounded-lg border border-black/20"
                  width={140}
                  // height={50}
                  src={whatsapp}
                  alt="whatsapp"
                />
              </Link>
            </div>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://www.facebook.com/amanasia"
                className="text-sm hover:underline"
              >
                Facebook
              </Link>
              <Link
                href="https://www.twitter.com/amanasia"
                className="text-sm hover:underline"
              >
                Twitter
              </Link>
              <Link
                href="https://www.instagram.com/amanasia"
                className="text-sm hover:underline"
              >
                Instagram
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <p className="mt-10 text-center text-sm">
        © {new Date().getFullYear()} oxabags
      </p>
    </footer>
  );
}
