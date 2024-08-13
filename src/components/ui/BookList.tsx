"use client";

import React, { useEffect, useState } from "react";
import BookCard from "./Bookcard";
import { useRouter } from "next/navigation";

interface Book {
  _id: string;
  title: string;
  description: string;
}

const getBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:3000/api/topics");
  const data = await response.json();
  return data.topics;
};

const deleteBook = async (id: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/topics?id=${encodeURIComponent(id)}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log("Book Deleted:", result);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Error deleting book:", errorData.message);
      return false;
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
};

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        console.log("Books fetched from API:", booksData);
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleNavigation = (id: string) => {
    router.push(`/editbooks/${id}`);
  };

  const handleDelete = async (id: string) => {
    const success = await deleteBook(id);
    if (success) {
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    }
  };

  return (
    <div className="flex flex-wrap gap-4 md:p-4">
      {books.map((book) => (
        <BookCard
          key={book._id}
          title={book.title}
          description={book.description}
          onUpdate={() => handleNavigation(book._id)}
          onDelete={() => handleDelete(book._id)}
        />
      ))}
    </div>
  );
};

export default BookList;
