import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Category } from "@/lib/types";
import SearchInput from "./SearchInput";

export default async function MenuSheet({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <Button variant={"outline"} className="relative">
          <MenuIcon size={22} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className=" my-8 flex flex-col space-y-3">
          <li>
            <SheetClose asChild>
              <Link href="/">
                <Button className="text-lg" variant="ghost">
                  Home
                </Button>
              </Link>
            </SheetClose>
          </li>
          {categories.map((category: Category, index: number) => (
            <li key={index}>
              <SheetClose asChild>
                <Link href={`/category/${category.slug.current}`}>
                  <Button className="text-lg" variant="ghost">
                    {category.name}
                  </Button>
                </Link>
              </SheetClose>
            </li>
          ))}
          <li>
            <SheetClose asChild>
              <Link href="/about">
                <Button className="text-lg" variant="ghost">
                  About Us
                </Button>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/contact">
                <Button className="text-lg" variant="ghost">
                  Contact Us
                </Button>
              </Link>
            </SheetClose>
          </li>
          <li>
            {/* <SheetClose> */}
              <SearchInput />
            {/* </SheetClose> */}
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
