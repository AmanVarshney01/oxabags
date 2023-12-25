import CartSheet from "./CartSheet";
import Navbar from "./Navbar";
import { getCategories } from "@/sanity/lib/sanity.query";

export default async function Header() {
  const categories = await getCategories();
  return (
    <header className="flex flex-row gap-6 items-center py-4 px-14">
      <h1 className="text-2xl font-bold">Amanasia</h1>
      <Navbar categories={categories} />
      <CartSheet />
    </header>
  );
}
