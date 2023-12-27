import CartSheet from "./CartSheet";
import MenuSheet from "./MenuSheet";
import Navbar from "./Navbar";
import { getCategories } from "@/sanity/lib/sanity.query";
import Link from "next/link";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="flex flex-row gap-6 items-center p-4">
      <MenuSheet categories={categories} />
      <Link href="/">
        <h1 className="text-2xl font-bold mx-auto md:mx-0">Amanasia</h1>
      </Link>
      <Navbar categories={categories} />
      <CartSheet />
    </header>
  );
}
