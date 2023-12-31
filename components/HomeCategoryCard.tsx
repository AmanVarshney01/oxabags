import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <Link href={link}>
      <Card className="flex flex-col h-full justify-between">
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold md:text-xl">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <Image
            loading="lazy"
            alt="Cotton Bag"
            className="mx-auto rounded-lg object-cover"
            height={300}
            src={image}
            width={300}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
