import { Skeleton } from "@/components/ui/skeleton";

function ProductCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Skeleton className="aspect-square w-full" />
      <div className="p-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="mt-2 h-4 w-1/2" />
      </div>
    </div>
  );
}

export default function ProductGridSkeleton() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Skeleton className="my-4 h-10 w-48" />
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(10)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
