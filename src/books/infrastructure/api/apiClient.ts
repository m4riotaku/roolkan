import type { Book } from "../../domain/book";
import { BOOK_API } from "./endpoints";

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(BOOK_API.getAll);
  return response.json();
}

export async function fetchBookById(id: string): Promise<Book> {
  const response = await fetch(BOOK_API.getById(id));
  return response.json();
}

export async function fetchBookByTitle(title: string): Promise<Book> {
  const response = await fetch(BOOK_API.getById(title));
  return response.json();
}
