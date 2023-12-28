import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeCategoryCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <Card className="flex transform flex-col justify-between transition-all hover:scale-105">
      <CardHeader className="">
        <CardTitle className="text-xl font-bold md:text-2xl">
          {title}
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          loading="lazy"
          alt="Cotton Bag"
          className="mx-auto object-cover rounded-lg"
          height={300}
          src={image}
          width={300}
        />
        <div className="pt-4">
          <Link href={link}>
            <Button className=" w-full" size={"sm"} variant="outline">
              See More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
