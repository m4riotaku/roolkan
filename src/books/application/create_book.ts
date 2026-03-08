import type { Book } from "../domain/book";
import type { BookRepository } from "../domain/book.repository";

export function create_book(book: Book, bookRepository: BookRepository) {
  return bookRepository.createBook(book);
}
