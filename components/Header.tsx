import CartSheet from "./CartSheet";
import MenuSheet from "./MenuSheet";
import Navbar from "./Navbar";
import { getCategories } from "@/sanity/lib/sanity.query";
import Link from "next/link";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="flex flex-row items-center gap-6 p-4">
      <MenuSheet categories={categories} />
      <Link href="/">
        <h1 className="mx-auto text-2xl font-bold md:mx-0">Amanasia</h1>
      </Link>
      <Navbar categories={categories} />
      <CartSheet />
    </header>
  );
}
