// import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

export default function CartSheet() {
  return (
    // <div>
      <Sheet>
        <SheetTrigger className="md:ml-auto ml-0">
          <ShoppingCartIcon size={22} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
                Cart
            </SheetTitle> 
            <SheetDescription>
              empty
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    // </div>
  );
}
