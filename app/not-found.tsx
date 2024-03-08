import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>
      <Link className="underline" href="/">
        Go Home
      </Link>
    </div>
  );
}
