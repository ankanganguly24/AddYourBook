"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const bookSchema = z.object({
  title: z.string().min(3, "Title should be at least 3 characters"),
  description: z.string().min(4, "Description should be at least 4 characters"),
});

type BookFormInputs = z.infer<typeof bookSchema>;

export const BookForm: React.FC = () => {
  const form = useForm<BookFormInputs>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = (data: BookFormInputs) => {
    console.log("Book Data:", data);
  };

  return (
    <div>
      <h1 className="text-2xl text-primary underline mb-5 text-center font-bold">
        Add Your Book
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Add your bookname" {...field} />
                </FormControl>
                <FormMessage className="text-red-800" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Add your Description" {...field} />
                </FormControl>
                <FormMessage className="text-red-800" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
