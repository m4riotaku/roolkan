import type { Result } from "../../shared/types/result.ts";
import type { Book } from "./book.ts";

export interface BookRepository {
  getAll: () => Promise<Result<Book[]>>;
  getById: (idBook: string) => Promise<Result<Book>>;
  getByTitle: (title: string) => Promise<Result<Book>>;
  createBook: (book: Book) => Promise<Result<Book>>;
  updateBook: (book: Book) => Promise<Result<Book>>;
  deleteBook: (book: Book) => Promise<Result<Book>>;
}
