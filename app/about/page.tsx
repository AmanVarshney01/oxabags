import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <section className="px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">About Us</h2>
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Established in 2003, Aman Enterprises has been a cornerstone in the
          manufacturing and distribution of premium quality bags and pouches.
        </li>
        <li>
          Nestled within the industrious landscape of Uttar Pradesh State
          Industrial Development Corporation, Ghaziabad, Uttar Pradesh, our
          journey began with a vision to blend tradition with modernity,
          offering products that resonate with our customers&apos; diverse
          needs.
        </li>
        <li>
          At Aman Enterprises, we take pride in our extensive range of
          offerings, including cotton bags, canvas, jute, denim pouches, and
          more. Our commitment to quality craftsmanship and attention to detail
          sets us apart in the industry.
        </li>
        <li>
          Each product is meticulously crafted to meet the highest standards of
          durability, functionality, and style.
        </li>
        <li>
          With years of experience and expertise, we have cultivated strong
          relationships with our customers, both individuals and organizations
          alike.
        </li>
        <li>
          We understand the unique requirements of our clients, which is why we
          offer the flexibility of bulk orders for organizations seeking
          high-quality bags and pouches for their various needs.
        </li>
        <li>
          Our dedication to customer satisfaction drives us to continuously
          innovate and improve our products and services.
        </li>
        <li>
          Whether you&apos;re an individual looking for eco-friendly bags or an
          organization in need of bulk purchases, Aman Enterprises is your
          reliable partner every step of the way.
        </li>
        <li>
          As a proud member of the community, we are committed to sustainability
          and ethical business practices. We strive to minimize our
          environmental footprint and contribute positively to society through
          our operations.
        </li>
      </ul>
    </section>
  );
}
