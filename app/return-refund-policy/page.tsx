import { OWNER_EMAIL } from "@/lib/constants";

export default function ReturnRefundPolicy() {
  return (
    <section className="flex flex-col gap-2 px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">Return and Refund Policy</h2>
      <section>
        <h3 className="p-2 text-2xl">Handcrafted Products</h3>
        <p className="p-2">
          At Aman Enterprise, we take pride in offering handcrafted products,
          where slight differences in detailing may occur. These minor printing
          and weaving irregularities contribute to the uniqueness and beauty of
          each handcrafted bag and cannot be labeled as defects.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Color Fastness</h3>
        <p className="p-2">
          We do not provide guarantees on color fastness. Natural colors, such
          as indigo, may bleed during the first wash. Therefore, we do not offer
          refunds or exchanges in such cases.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Care Instructions</h3>
        <p className="p-2">
          Handmade bags require special care to preserve their beauty and
          strength. We recommend reading our instruction manual for washing and
          care before using the bags. Requests for bag replacement or refund
          will not be considered valid if incorrect washing and caring methods
          cause damage.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Customer Satisfaction</h3>
        <p className="p-2">
          Your satisfaction is of utmost importance to us. If you are not
          satisfied with your purchase, we are prepared to replace the product
          when the parameters of our return policy are met.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">In the Uncommon Occurrence That</h3>
        <ul className="list-disc p-2">
          <li>
            Wrong product has been delivered to you (i.e., the size or color
            differs from the option you selected).
          </li>
          <li>The product you have received is defective.</li>
          <li>
            Minor differences due to monitor settings should be measured as
            normal and are not subject to return.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Steps to Notify Us</h3>
        <p className="p-2">
          Please notify us immediately by following the steps below:
        </p>
        <ol className="list-disc p-2">
          <li>
            Send an email to{" "}
            <a href={`mailto:${OWNER_EMAIL}`}>${OWNER_EMAIL}</a> along with a
            photo of the damaged product.
          </li>
          <li>
            A Returns and Exchanges form is also required with necessary
            information. (<a href="#">To download a form click here</a>)
          </li>
        </ol>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Return Procedure</h3>
        <ul className="list-disc p-2">
          <li>
            Goods are returnable within 48 hours of receiving, provided they
            contain the original tags and sales invoice and are in unused
            condition.
          </li>
          <li>
            Choose any trusted courier service or place a pickup request with
            our courier partner. Our team will coordinate the process if the
            service is available in your area.
          </li>
          <li>
            Safely package the return packets to eliminate chances of further
            damage during transit. Refunds and replacements will be void on
            arrival of damaged products.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">After Receiving the Package</h3>
        <p className="p-2">
          Our team will decide whether the product is eligible for refunds or
          replacement and inform you via email.
        </p>
        <ul className="list-disc p-2">
          <li>
            If eligible for return, the item will be replaced free of cost
            (subject to availability), or the cost of the goods (excluding
            freight charges) will be refunded to the credit/debit card used for
            purchasing.
          </li>
          <li>
            Freight charges for returning the goods will be deducted based on
            our predetermined tariff, depending on your location. If our courier
            partner is involved, no additional payments are required for the
            service.
          </li>
          <li>
            If the product is deemed unfit for return, goods will be delivered
            back to you.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Processing Time</h3>
        <p className="p-2">
          It may take up to 10 days from our end to process and close a
          refund/replacement issue.
        </p>
        <p className="p-2">
          Allow one billing cycle for credits issued to your debit/credit card
          to appear on your statement.
        </p>
        <p className="p-2">
          The issuing bank manages the cardholder&apos;s account. We are not
          responsible for any delays in the amount being credited to a bank
          account. The time taken for the refund to appear on the
          cardholder&apos;s account may vary depending on the bank.
        </p>
      </section>
    </section>
  );
}
