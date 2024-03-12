import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function BulkBuyCard({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Buy in Bulk and Save!</CardTitle>
        <CardDescription>
          Save money and get customized options.
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-row"></CardContent>
    </Card>
  );
}
