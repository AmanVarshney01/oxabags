import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  className?: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  link,
  className,
}: CategoryCardProps) {
  return (
    <Link href={link}>
      <Card
        className={cn(
          "flex h-full flex-row justify-between sm:flex-col",
          className,
        )}
      >
        <CardHeader className="w-full p-4">
          <CardTitle className="text-base font-medium md:text-lg">
            {title}
          </CardTitle>
          <CardDescription className="text-pretty text-sm md:text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex w-full items-center justify-center p-4">
          <Image
            loading="lazy"
            alt="Cotton Bag"
            className="mx-auto rounded-lg"
            height={300}
            width={300}
            src={image}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
