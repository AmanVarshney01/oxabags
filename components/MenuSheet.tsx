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
        <Button variant={"outline"} className="relative" size={"icon"}>
          <MenuIcon size={15} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-2">
        <SheetHeader className="p-2">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className=" my-8 flex flex-col space-y-3">
          <SheetClose asChild>
            <Link href="/">
              <Button className="text-lg" variant="ghost">
                Home
              </Button>
            </Link>
          </SheetClose>
          {categories.map((category: Category, index: number) => (
            <SheetClose asChild key={index}>
              <Link href={`/category/${category.slug.current}`}>
                <Button className="text-lg" variant="ghost">
                  {category.name}
                </Button>
              </Link>
            </SheetClose>
          ))}
          <SearchInput />
        </div>
      </SheetContent>
    </Sheet>
  );
}
