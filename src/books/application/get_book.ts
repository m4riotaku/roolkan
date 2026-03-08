import type { BookRepository } from "../domain/book.repository";

export function get_book_by_id(id: string, bookRepository: BookRepository) {
  return bookRepository.getById(id);
}

export function get_book_by_title(
  title: string,
  bookRepository: BookRepository,
) {
  return bookRepository.getByTitle(title);
}
