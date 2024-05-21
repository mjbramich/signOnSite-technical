import BookTable from "@/components/book-table";

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

  return (
    <>
      <h1 className="text-center mb-10 h1">SoSage Library</h1>
      <BookTable books={books} />
    </>
  );
}
