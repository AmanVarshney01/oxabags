import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
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
    <Link href={link}>
      <Card className="flex h-full flex-row sm:flex-col justify-between ">
        <CardHeader className="p-4 w-full">
          <CardTitle className="text-base font-medium md:text-lg">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base text-pretty ">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 w-full flex justify-center items-center">
          <Image
            loading="lazy"
            alt="Cotton Bag"
            className="mx-auto rounded-lg"
            height={300}
            src={image}
            width={300}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
