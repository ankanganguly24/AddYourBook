"use client";

import React from "react";
import BookCard from "./Bookcard";
import { useRouter } from "next/navigation";

const books = [
  {
    title: "New Book Added",
    description: "Description of the new book is this",
  },
  { title: "Another Book", description: "Description of another book" },
  { title: "Yet Another Book", description: "Description of yet another book" },
  { title: "More Books", description: "Description of more books" },
  { title: "Book Five", description: "Description of book five" },
  { title: "Book Six", description: "Description of book six" },
];

const BookList: React.FC = () => {
  const router = useRouter();
  const handlenavigation = () => {
    router.push("/editbooks");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          description={book.description}
          onView={() => console.log("view")}
          onUpdate={handlenavigation}
          onDelete={() => console.log("delete")}
        />
      ))}
    </div>
  );
};

export default BookList;
