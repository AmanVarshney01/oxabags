import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <p className="hidden">
        <label>
          Do not fill this out if you are human: <input name="bot-field" />
        </label>
      </p>{" "}
      <label htmlFor="phone" className="text-lg font-bold">
        Request a Callback
      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        placeholder="Enter your phone number"
        className="mt-3 w-full rounded-lg border-2 px-3 py-2"
        required
      />
      <div data-netlify-recaptcha="true"></div>
      <Button type="submit" className="mt-3 w-full" variant="outline">
        Submit
      </Button>
    </form>
  );
}
