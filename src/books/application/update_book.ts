import type { Book } from "../domain/book.ts";
import type { BookRepository } from "../domain/book.repository.ts";

export function update_book(book: Book, bookRepository: BookRepository) {
  return bookRepository.updateBook(book);
}
