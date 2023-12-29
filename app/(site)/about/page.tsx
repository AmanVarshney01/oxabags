export default function About() {
  const companyName = "Aman Enterprises";
  const ownerName = "Kuldeep Gupta";
  const address =
    "G-211, UPSIDC Ind. Area, Phase-1, M. G. Road, Masoori, Ghaziabad-201015, Uttar Pradesh, India";
  const phoneNumber = "+91-9868151526";
  const email = "info@amanasia.com";

  return (
    <section className="px-2 pb-8 md:px-8">
      <h2 className="py-8 text-2xl font-medium">About Us</h2>
      <div className="flex flex-row items-center space-x-8">
        <div className="flex flex-col gap-8 text-base font-medium md:text-lg">
          <div className="flex flex-col gap-1">
            <p>Company Name:</p>
            <span className="font-normal">{companyName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Owner Name:</p>
            <span className="font-normal">{ownerName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Address:</p>
            <span className="font-normal">{address}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Phone Number:</p>
            <span className="font-normal">{phoneNumber}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Email:</p>
            <span className="font-normal">{email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
