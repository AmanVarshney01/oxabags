import CategoryCard from "@/components/CategoryCard";
import CanvasBag from "@/public/categoryImages/canvas bags.webp";
import CottonBag from "@/public/categoryImages/cotton bag.webp";
import DenimBag from "@/public/categoryImages/denim bags.webp";
import FileFolder from "@/public/categoryImages/file folder.jpg";
import JuteBag from "@/public/categoryImages/JUTE BAGS.webp";
import Pouch from "@/public/categoryImages/pouch.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import Image from "next/image";
import { BoxesIcon, MailIcon, PhoneCallIcon } from "lucide-react";

export default function CategoryCardSection() {
  return (
    <section className=" py-4">
      <div className=" grid grid-cols-1 justify-end gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <Card className=" col-span-2">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
              <BoxesIcon size={24} />
              Buy in Bulk? Call Us Today!
            </CardTitle>
            <CardDescription>
              Whether you need canvas, cotton, or jute bags in large volumes, we
              offer competitive pricing, fast delivery, and excellent customer
              service for bulk orders.
            </CardDescription>
          </CardHeader>
          <CardContent>
           
          </CardContent>
        </Card>
        <CategoryCard
          title="Cotton Bags"
          description="Ethically sourced and made from 100% organic cotton."
          image={CottonBag}
          link="/category/cotton-bags"
        />
        <CategoryCard
          title="Canvas Bags"
          description="Trendy and stylish designs printed on high quality canvas."
          image={CanvasBag}
          link="/category/canvas-bags"
        />
        <CategoryCard
          title="Pouches"
          description="Pouches for your everyday needs."
          image={Pouch}
          link="/category/pouches"
        />

        <CategoryCard
          title="File Folders"
          description="Keep your documents safe and organized."
          image={FileFolder}
          link="/category/file-folders"
        />

        <CategoryCard
          title="Jute Bags"
          description="Eco-friendly bags made from jute."
          image={JuteBag}
          link="/category/jute-bags"
        />

        <CategoryCard
          title="Denim Bags"
          description="Trendy and stylish designs printed on high quality denim."
          image={DenimBag}
          link="/category/denim-bags"
        />
      </div>
    </section>
  );
}
