"use client"
import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const formData: any = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Thank you for contacting us. We will get back to you soon.");
        form.reset();
      })
      .catch((error) => alert(error));
  }

  return (
    <footer className="bg-[#a38b70] px-5 py-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold">Contact Us</h2>
            {/* <a
              href="mailto:info@amanasia.com"
              className="text-sm hover:underline block mb-3"
            >
              info@amanasia.com
            </a> */}
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
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/amanasia"
                className="text-sm hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com/amanasia"
                className="text-sm hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/amanasia"
                className="text-sm hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="phone" className="text-lg font-bold">
                Request a Callback
              </label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{10}"
                placeholder="Enter your phone number"
                className="mt-3 w-full rounded-lg border-2 border-white px-3 py-2 text-black transition-colors duration-200 focus:border-blue-500 focus:outline-none"
                required
              />
              <Button type="submit" className="mt-3 w-full" variant="secondary">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm">
        © {new Date().getFullYear()} Amanasia
      </p>
    </footer>
  );
}
