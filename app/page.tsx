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
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 px-2">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">
              Eco-Friendly Cotton Bags
            </CardTitle>
            <CardDescription className="">
              Ethically sourced and made from 100% organic cotton.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Cotton Bag"
              className="w-full h-3/5 object-cover"
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
            <CardTitle className="text-2xl font-bold">
              Large Cotton Totes
            </CardTitle>
            <CardDescription className="">
              Perfect for grocery shopping, ditch the plastic and go green.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Large Cotton Tote"
              className="w-full h-3/5 object-cover"
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
            <CardTitle className="text-2xl font-bold">
              Designer Canvas Bags
            </CardTitle>
            <CardDescription className="">
              Trendy designs printed on high quality canvas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="w-full h-3/5 object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105 block md:hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">
              Promotional Items
            </CardTitle>
            <CardDescription className="">
              Boost your brand visibility with custom promotional items.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="w-full h-3/5 object-cover"
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
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 px-2 mb-8">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">Pouches</CardTitle>
            <CardDescription className="">
              Pouches for your everyday needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="w-full h-3/5 object-cover"
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
            <CardTitle className="text-2xl font-bold">File Folders</CardTitle>
            <CardDescription className="">
              Keep your documents safe and organized.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="w-full h-3/5 object-cover"
              height={300}
              src="/testbag.jpg"
              width={300}
            />
            <Button className="w-full mt-4" size="sm" variant="outline">
              See More
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all hover:scale-105 hidden md:block">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">
              Promotional Items
            </CardTitle>
            <CardDescription className="">
              Boost your brand visibility with custom promotional items.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              alt="Designer Cotton Bag"
              className="w-full h-3/5 object-cover"
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
