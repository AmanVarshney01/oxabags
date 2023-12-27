"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState<any>({ phone: "" });
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData: any = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        alert("Thank you for contacting us. We will get back to you soon.");
        form.reset();
      })
      .catch((error) => alert(error));
  }

  return (
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
        name="phone"
        pattern="[0-9]{10}"
        placeholder="Enter your phone number"
        className="mt-3 w-full rounded-lg border-2 border-white px-3 py-2 text-black transition-colors duration-200 focus:border-blue-500 focus:outline-none"
        required
        onChange={handleChange}
      />
      <Button type="submit" className="mt-3 w-full" variant="secondary">
        Submit
      </Button>
    </form>
  );
}
