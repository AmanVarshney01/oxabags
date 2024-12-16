import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ProductDetailCardSkeleton() {
  return (
    <section className="flex w-full flex-col py-4 md:flex-row">
      <div className="relative aspect-square w-full md:w-1/2">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex w-full flex-col space-y-2 px-0 py-2 md:w-1/2 md:px-4 lg:px-12">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/3" />

        <Table>
          <TableBody>
            {[...Array(6)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="pt-2">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </section>
  );
}
