import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <section className="px-2 py-4">
      <h2 className="p-4 text-3xl font-medium ">About Us</h2>
    </section>
  );
}
