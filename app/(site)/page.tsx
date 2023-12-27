import Image from "next/image";
import { Button } from "@/components/ui/button";
import Billboard from "@/components/Billboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductMarquee from "@/components/ProductMarquee";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <section className="grid grid-cols-1 gap-4 px-2 md:grid-cols-3">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              Eco-Friendly Cotton Bags
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Ethically sourced and made from 100% organic cotton.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Cotton Bag"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              Large Cotton Totes
            </CardTitle>
            <CardDescription className="text-sm md:text-base ">
              Perfect for grocery shopping, ditch the plastic and go green.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Large Cotton Tote"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              Designer Canvas Bags
            </CardTitle>
            <CardDescription className="text-sm md:text-base ">
              Trendy designs printed on high quality canvas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
      </section>
      <ProductMarquee />
      <section className="mb-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-3">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              Pouches
            </CardTitle>
            <CardDescription className="text-sm md:text-base ">
              Pouches for your everyday needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              File Folders
            </CardTitle>
            <CardDescription className="text-sm md:text-base ">
              Keep your documents safe and organized.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-bold md:text-2xl">
              Promotional Items
            </CardTitle>
            <CardDescription className="text-sm md:text-base ">
              Boost your brand visibility with custom promotional items.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="mx-auto object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="mt-4 w-full" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
