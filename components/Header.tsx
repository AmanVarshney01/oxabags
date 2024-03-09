import CartSheet from "./cart/CartSheet";
import MenuSheet from "./MenuSheet";
import Navbar from "./Navbar";
import { getCategories } from "@/sanity/lib/sanity.query";
import Link from "next/link";
import SearchInput from "./SearchInput";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="sticky top-0 z-10 mx-auto w-full max-w-7xl border-b border-border/40 bg-background/95 px-2 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/90 md:px-10">
      <nav className=" flex flex-row items-center  gap-6">
        <MenuSheet categories={categories} />
        <Link className="mx-auto md:mx-0" href="/">
          <h1 className="text-2xl font-bold italic">oxabags</h1>
        </Link>
        <Navbar categories={categories} />
        <div className="ml-0 flex flex-row gap-2 md:ml-auto">
          <div suppressHydrationWarning className="hidden md:block">
            <SearchInput />
          </div>
          <CartSheet />
        </div>
      </nav>
    </header>
  );
}
