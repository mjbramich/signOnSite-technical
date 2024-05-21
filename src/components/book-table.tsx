import { Book } from "@/types";

import ActionCell from "@/components/action-cell";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  books: Book[];
}
const BookTable = ({ books }: Props) => {
  return (
    <Card className="pt-4">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Book</TableHead>
              <TableHead className="">Owner</TableHead>
              <TableHead className="">Availability</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.length === 0 ? (
              <TableRow>
                <TableCell>No books found</TableCell>
              </TableRow>
            ) : (
              books?.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>
                    <p className="font-medium">{book.title}</p>
                  </TableCell>
                  <TableCell className="">{book.owner}</TableCell>
                  <TableCell className="">
                    <ActionCell available={book.available} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BookTable;
