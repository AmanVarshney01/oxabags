import CartSheet from "./CartSheet";
import MenuSheet from "./MenuSheet";
import Navbar from "./Navbar";
import { getCategories } from "@/sanity/lib/sanity.query";
import Link from "next/link";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="flex flex-row items-center gap-6 px-2 py-4 md:px-10">
      <MenuSheet categories={categories} />
      <Link className="mx-auto md:mx-0" href="/">
        <h1 className="text-xl md:text-2xl  font-bold">Amanasia</h1>
      </Link>
      <Navbar categories={categories} />
      <CartSheet />
    </header>
  );
}
