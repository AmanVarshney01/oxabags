import { MailIcon, PhoneCallIcon, TruckIcon } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import razorpay from "../public/razorpay.png";

export default function Footer() {
  return (
    <footer className=" pb-5 md:px-5 md:pb-10">
      <section className="flex flex-row justify-around items-center text-center text-pretty py-10 border-y">
        <div className="">
          <TruckIcon size={32} />
          <span className="text-lg font-medium">Free Shipping</span>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <span className="text-lg font-medium">Payments via</span>
          <Image
            loading="lazy"
            className="rounded-lg border border-black/20"
            width={100}
            src={razorpay}
            alt="razorpay"
          />
        </div>
        <div className="">
          {/* <span></span> */}
          <span className="text-lg font-medium">
            Made in India
          </span>
        </div>
      </section>
      <section className="container mx-auto pt-10">
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
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Return and Refund Policy
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Shipping Policy
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
            <div className="w-fit">
              <Link
                href={"https://wa.me/9868151526"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  loading="lazy"
                  className="rounded-lg border border-black/20"
                  width={140}
                  src={whatsapp}
                  alt="whatsapp"
                />
              </Link>
            </div>
            <div className="mt-2 flex space-x-4">
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
      </section>
      <p className="mt-10 text-center text-sm">
        © {new Date().getFullYear()} oxabags
      </p>
    </footer>
  );
}
