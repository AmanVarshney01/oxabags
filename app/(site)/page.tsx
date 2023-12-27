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

export default async function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 px-2">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">
              Eco-Friendly Cotton Bags
            </CardTitle>
            <CardDescription className="md:text-base text-sm">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">
              Large Cotton Totes
            </CardTitle>
            <CardDescription className="md:text-base text-sm ">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">
              Designer Canvas Bags
            </CardTitle>
            <CardDescription className="md:text-base text-sm ">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
      </section>
      <ProductMarquee />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 px-2 mb-8">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">Pouches</CardTitle>
            <CardDescription className="md:text-base text-sm ">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">File Folders</CardTitle>
            <CardDescription className="md:text-base text-sm ">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="md:text-2xl text-base font-bold">
              Promotional Items
            </CardTitle>
            <CardDescription className="md:text-base text-sm ">
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
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
