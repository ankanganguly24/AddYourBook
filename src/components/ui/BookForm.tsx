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

  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const onSubmit = async (data: BookFormInputs) => {
    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Book created successfully!");
      } else {
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error creating book:", error);
      setSuccessMessage(null);
    }
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
                  <Input placeholder="Add your book name" {...field} />
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
                  <Textarea placeholder="Add your description" {...field} />
                </FormControl>
                <FormMessage className="text-red-800" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {successMessage && (
        <div className="mt-4 text-green-600 text-center">{successMessage}</div>
      )}
    </div>
  );
};

export default BookForm;
