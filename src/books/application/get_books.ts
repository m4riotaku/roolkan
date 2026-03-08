import type { BookRepository } from "../domain/book.repository";

export function get_all_books(bookRepository: BookRepository) {
  return bookRepository.getAll();
}
