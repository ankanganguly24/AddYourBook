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

interface EditBookFormProps {
  id: string;
}

export const EditBookForm: React.FC<EditBookFormProps> = ({ id }) => {
  const form = useForm<BookFormInputs>({
    resolver: zodResolver(bookSchema),
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: BookFormInputs) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Book Updated:", result);
      } else {
        throw new Error(result.message || "Failed to update book");
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-primary underline mb-5 text-center font-bold">
        Edit Your Book
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

          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>

          {error && <p className="text-red-800 mt-2">{error}</p>}
        </form>
      </Form>
    </div>
  );
};

export default EditBookForm;
