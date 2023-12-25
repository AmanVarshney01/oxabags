import {
  Sheet,
  SheetContent,
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
        <Link href="/">
            <Button variant="link">Home</Button>
        </Link>
        <ul>
          {categories.map((category: any) => (
            <li key={category._id}>
              <Link
                href={`/category/${category.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/about">About</Link>
        {/* <div></div> */}
        <Link href="/contact">Contact</Link>
      </SheetContent>
    </Sheet>
  );
}
