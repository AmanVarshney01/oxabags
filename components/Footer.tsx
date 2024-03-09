import { MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import razorpay from "../public/razorpay.png";

export default function Footer() {
  return (
    <footer className=" pb-10 md:px-5 md:pb-20">
      <section className="flex flex-row items-center justify-around text-pretty border-y py-10 text-center">
        <div className="">
          <span className="text-sm font-medium md:text-lg">Made in India</span>
        </div>
        <div className="">
          <span className="text-sm font-medium md:text-lg">Free Shipping</span>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <span className="text-sm font-medium md:text-lg">Payments via</span>
          <Image
            loading="lazy"
            className="bg-[#02042b] p-1"
            width={90}
            src={razorpay}
            alt="razorpay"
          />
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
                <Link
                  href="/terms-of-service"
                  className="text-sm hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund-policy"
                  className="text-sm hover:underline"
                >
                  Return and Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold">Contact Us</h2>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <MailIcon size={16} />
              <Link href="mailto:info@amanasia.com">info@amanasia.com</Link>
            </div>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <PhoneCallIcon size={16} />
              <Link href="tel:9868151526">9868151526</Link>
            </div>
            <div className="mb-3 flex gap-2 text-sm hover:underline">
              <PhoneCallIcon size={16} />
              <Link href="tel:9811365888">9811365888</Link>
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
          <div>
            <h2 className="mb-3 text-lg font-bold">Aman Enterprises</h2>
            <p>
              G-211, UPSIDC Industrial Area Phase-1 M. G. Road, Dholana
              GHAZIABAD -201015, UP
            </p>
            <iframe
              className=" mt-4 h-20 w-full max-w-md rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.1793363253946!2d77.56999087550157!3d28.65434847565286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM5JzE1LjciTiA3N8KwMzQnMjEuMiJF!5e0!3m2!1sen!2sin!4v1709982075591!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <p className="mt-10 text-center text-sm">
        © {new Date().getFullYear()} oxabags
      </p>
    </footer>
  );
}
