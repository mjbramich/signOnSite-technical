"use client";

import { useState } from "react";
import BookTable from "@/components/book-table";
import Pagination from "@/components/pagination";

export default function Home() {
  const books = [
    {
      id: "1",
      title: "The Great Gatsby",
      owner: "F. Scott Fitzgerald",
      available: true,
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      owner: "Harper Lee",
      available: false,
    },
    {
      id: "3",
      title: "1984",
      owner: "George Orwell",
      available: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 1;
  const totalPages = Math.ceil(Number(books?.length) / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;
  const paginatedBooks = books?.slice(startIndex, endIndex);

  return (
    <>
      <h1 className="text-center mb-10 h1">SoSage Library</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
      <BookTable books={paginatedBooks} />
    </>
  );
}
