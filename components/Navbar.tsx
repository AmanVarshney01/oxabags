import Link from "next/link";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";

const query = `*[_type == "category"] {
  _id,
  name
}`;

export default async function Navbar() {
  const categories = await client.fetch(query);
  return (
    <header className="flex flex-row gap-6 items-center p-4">
      <h1 className="text-2xl">Amanasia</h1>
      <nav className=" flex flex-row gap-4">
        <Link href="/"><Button variant="link">All</Button></Link>
        {categories.map((category: any) => (
          <Link key={category._id} href={`/category/${category.name}`}>
            <Button variant="link">{category.name}</Button>
          </Link>
        ))}
      </nav>
      <Link href="/about"><Button variant="link">About</Button></Link>
      <Link href="/contact"><Button variant="link">Contact</Button></Link>
      {/* <Button variant="link">Saved</Button> */}
    </header>
  );
}
