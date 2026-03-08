import { create_book } from "../application/create_book";
import { get_book_by_id, get_book_by_title } from "../application/get_book";
import { get_all_books } from "../application/get_books";
import type { Book } from "../domain/book";
import { BookRespositoryJson } from "../infrastructure/storage/book.repository.json";

const repository = new BookRespositoryJson();

export const createBookUseCase = (book: Book) => create_book(book, repository);
export const getBookByIdUseCase = (id: string) =>
  get_book_by_id(id, repository);
export const getBookByTitleUseCase = (title: string) =>
  get_book_by_title(title, repository);
export const updateBookUseCase = (book: Book) => create_book(book, repository);
export const getAllBooksUseCase = () => get_all_books(repository);
