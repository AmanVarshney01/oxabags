import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsMarqueeWrapperSkeleton() {
  return (
    <section className="py-4 md:py-10">
      <Skeleton className="h-6 w-48 p-2 pt-0 md:p-4 md:pt-0" />
      <div className="mt-4 flex gap-4 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="min-w-[200px] space-y-2 rounded-lg border p-2"
          >
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
