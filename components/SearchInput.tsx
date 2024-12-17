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
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  searchTerm: z.string().min(1),
});

export default function SearchInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search?q=${values.searchTerm}`);
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <div className="relative flex flex-row">
                  <Input placeholder="Search Products" {...field} />
                  <Button
                    disabled={
                      !form.formState.isValid ||
                      form.formState.isSubmitting ||
                      !form.formState.isDirty
                    }
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
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
