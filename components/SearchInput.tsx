"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getProductSlugByID } from "@/sanity/lib/sanity.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  productCode: z.coerce.number({
    invalid_type_error: "Invalid ID",
  }),
});

export default function SearchInput() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const id: number = Number(values.productCode);
    try {
      const productSlug = await getProductSlugByID(id);
      router.push(`/product/${productSlug.slug.current}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid Product Code",
      });
    }
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="productCode"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <div className="relative flex flex-row">
                  <Input
                    placeholder="Search by Code"
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                  <Button
                    disabled={form.formState.isSubmitting}
                    size={"icon"}
                    type="submit"
                    variant={"outline"}
                    className="absolute right-1 scale-75 border-0 p-0"
                  >
                    <SearchIcon size={15} />
                    <span className="sr-only">search</span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="absolute -bottom-6" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
