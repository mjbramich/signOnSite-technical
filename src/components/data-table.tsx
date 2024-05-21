"use client";
import { useState } from "react";
import { Book } from "@/types";
import booksData from "../lib/bookData.json"; // importing as a module
import Pagination from "@/components/pagination";
import BookTable from "@/components/book-table";
import { Button } from "@/components/ui/button";

const DataTable = () => {
  const [books, setBooks] = useState<Book[]>(booksData);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indexes based on pagination parameters

  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(Number(books?.length) / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;

  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setPage={setCurrentPage}
        />
      </div>
      <BookTable books={paginatedBooks} />
      <Button className="self-end" variant="outline">
        Add Book
      </Button>
    </div>
  );
};

export default DataTable;
