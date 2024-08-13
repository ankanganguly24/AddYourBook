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

  const handleNavigation = () => {
    router.push("/editbooks");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books.map((book) => (
        <BookCard
          key={book._id}
          title={book.title}
          description={book.description}
          onView={() => console.log("view")}
          onUpdate={handleNavigation}
          onDelete={() => console.log("delete")}
        />
      ))}
    </div>
  );
};

export default BookList;
