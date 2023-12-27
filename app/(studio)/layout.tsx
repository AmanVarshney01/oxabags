import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amanasia Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
