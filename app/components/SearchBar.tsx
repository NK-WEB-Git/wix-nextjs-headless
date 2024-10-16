"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  searchText: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function SearchBar() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchText: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/list?q=${data.searchText}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex">
        <FormField
          control={form.control}
          name="searchText"
          render={({ field }) => (
            <FormItem className="flex-1 bg-transparent">
              <FormControl>
                <Input
                  placeholder="search..."
                  {...field}
                  className="outline-none rounded-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-none border-none">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}

export default SearchBar;
