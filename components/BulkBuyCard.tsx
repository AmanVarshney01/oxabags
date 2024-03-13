import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BulkBuyCard({ className }: { className?: string }) {
  return (
    <Card className={cn(className, " flex flex-col justify-between")}>
      <CardHeader>
        <CardTitle>Buy in Bulk and Save!</CardTitle>
        <CardDescription>
          Save money and get customized options.
        </CardDescription>
      </CardHeader>
      <CardContent className=""></CardContent>
      <CardFooter className="w-full">
        <Link href={"/contact"} className="w-full">
          <Button className="w-full">Contact Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
