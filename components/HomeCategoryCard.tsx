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
    <Card className="flex transform flex-col justify-between transition-all hover:scale-105">
      <Link href={link}>
        <CardHeader className="">
          <CardTitle className="text-xl font-bold md:text-2xl">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <AspectRatio ratio={1/1}> */}
            <Image
              loading="lazy"
              alt="Cotton Bag"
              className="mx-auto rounded-lg object-cover"
              height={300}
              src={image}
              width={300}
            />
          {/* </AspectRatio> */}
          {/* <div className="pt-4">
          <Link href={link}>
            <Button className=" w-full" size={"sm"} variant="outline">
              
            </Button>
          </Link>
        </div> */}
        </CardContent>
      </Link>
    </Card>
  );
}
