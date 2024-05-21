"use client";

import { Button } from "./ui/button";
interface Props {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, setPage }: Props) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex flex-1 justify-between items-center  gap-2">
        <Button
          disabled={currentPage <= 1}
          onClick={() => setPage(currentPage - 1)}
          variant="outline"
        >
          Previous
        </Button>

        <p className="text-sm text-foreground">
          {`Showing Page ${currentPage} of ${totalPages}`}
        </p>
        <Button
          disabled={currentPage >= totalPages}
          onClick={() => setPage(currentPage + 1)}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </nav>
  );
};

export default Pagination;
