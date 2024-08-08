import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  OWNER_EMAIL,
  OWNER_NAME,
  OWNER_PHONE_1,
  OWNER_PHONE_2,
} from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <section className="px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">Contact Us</h2>
      <div className="flex flex-row items-center space-x-8">
        <div className="flex flex-col gap-8 text-base font-medium md:text-lg">
          <div className="flex flex-col gap-1">
            <p>Company Name:</p>
            <span className="font-normal">{COMPANY_NAME}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Owner Name:</p>
            <span className="font-normal">{OWNER_NAME}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Address:</p>
            <span className="font-normal">{COMPANY_ADDRESS}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Phone Number:</p>
            <span className="font-normal">
              {OWNER_PHONE_1}, {OWNER_PHONE_2}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Email:</p>
            <span className="font-normal">{OWNER_EMAIL}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
