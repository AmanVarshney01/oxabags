export default function PrivacyPolicy() {
  return (
    <section className="flex flex-col gap-2 px-2 py-4">
      <h2 className="p-4 text-3xl">Privacy Policy</h2>
      <section>
        <h3 className="p-2 text-2xl">How We Use Your Information</h3>
        <p className="p-2">
          We use the information we collect to process your orders, communicate
          with you about your purchases, provide customer support, and improve
          our products and services.
        </p>
        <p className="p-2">
          We do not use your personal information for promotional email
          campaigns or direct marketing purposes.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Information Sharing and Disclosure</h3>
        <p className="p-2">
          We do not sell, trade, or rent your personal information to third
          parties for marketing purposes. However, we may share your information
          with trusted third-party service providers who assist us in operating
          our website, conducting business, or servicing you.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Data Security</h3>
        <p className="p-2">
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, disclosure, alteration,
          or destruction. However, please note that no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>
      </section>
    </section>
  );
}
