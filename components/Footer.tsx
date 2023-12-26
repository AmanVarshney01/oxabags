import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#a38b70] text-white py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-3">Quick Links</h2>
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
            <h2 className="font-bold text-lg mb-3">Contact Us</h2>
            {/* <a
              href="mailto:info@amanasia.com"
              className="text-sm hover:underline block mb-3"
            >
              info@amanasia.com
            </a> */}
            <div className="flex gap-2 text-sm hover:underline mb-3">
              <MailIcon size={16} />
              <p>info@amanasia.com</p>
            </div>
            <div className="flex gap-2 text-sm hover:underline mb-3">
              <PhoneCallIcon size={16} />
              <p>9868151526</p>
            </div>
            <div className="flex gap-2 text-sm hover:underline mb-3">
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
            <h2 className="font-bold text-lg mb-3">Request a Callback</h2>
            <form>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 rounded-lg border-2 border-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              {/* <button type="submit" className="mt-3 w-full px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">Submit</button> */}
              <Button type="submit" className="mt-3 w-full" variant="secondary">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-10">
        © {new Date().getFullYear()} Amanasia
      </p>
    </footer>
  );
}
