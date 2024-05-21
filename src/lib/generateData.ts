// https://stackoverflow.com/questions/71808342/using-esm-modules-with-ts-node

// TO run =>  node --loader ts-node/esm ./generateData.ts

import { Book } from "@/types";
import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

function createRandomBook() {
  const id = faker.string.uuid();
  const title = faker.lorem.words(4);
  const owner = faker.person.fullName();
  const available = faker.datatype.boolean(0.5);
  return {
    id,
    title,
    owner,
    available,
  };
}

function generateBooks(numBooks: number) {
  const books = [];
  for (let i = 0; i < numBooks; i++) {
    books.push(createRandomBook());
  }
  return books;
}

(async function generateData() {
  try {
    const numBooks = 100;
    const fakeBooks: Book[] = generateBooks(numBooks);

    // Write the fakeBooks array to a file
    await fs.writeFile("./bookData.json", JSON.stringify(fakeBooks));
    console.log("Data successfully wrote to file");
  } catch (error) {
    console.error("Error generating or writing data:", error);
  }
})();
