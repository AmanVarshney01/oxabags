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

export default async function MenuSheet({ categories }: any) {
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
          <SheetClose asChild>
            <Link href="/">
              <Button className="text-lg" variant="link">
                Home
              </Button>
            </Link>
          </SheetClose>
          {categories.map((category: any, index: number) => (
            <li key={index}>
              <SheetClose asChild>
                <Link href={`/category/${category.slug.current}`}>
                  <Button className="text-lg" variant="link">
                    {category.name}
                  </Button>
                </Link>
              </SheetClose>
            </li>
          ))}
          <SheetClose asChild>
            <Link href="/about">
              <Button className="text-lg" variant="link">
                About
              </Button>
            </Link>
          </SheetClose>
          {/* <SheetClose asChild>
            <Link href="/contact">
              <Button className="text-lg" variant="link">
                Contact
              </Button>
            </Link>
          </SheetClose> */}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
