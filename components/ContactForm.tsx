import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <form
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
        className="mt-3 w-full rounded-lg border-2 border-white px-3 py-2 text-black dark:text-white transition-colors duration-200 focus:border-blue-500 focus:outline-none"
        required
      />
      <Button type="submit" className="mt-3 w-full" variant="secondary">
        Submit
      </Button>
    </form>
  );
}
