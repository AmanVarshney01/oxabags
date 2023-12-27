import {
  Sheet,
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
      <SheetTrigger className="block md:hidden">
        <MenuIcon size={22} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className=" flex flex-col space-y-6 py-8">
          <Link href="/">
            <Button className="text-lg" variant="link">
              Home
            </Button>
          </Link>
          {categories.map((category: any, index: number) => (
            <li key={index}>
              <Link
                href={`/category/${category.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <Button className="text-lg" variant="link">
                  {category.name}
                </Button>
              </Link>
            </li>
          ))}
          <Link href="/about">
            <Button className="text-lg" variant="link">
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="text-lg" variant="link">
              Contact
            </Button>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
