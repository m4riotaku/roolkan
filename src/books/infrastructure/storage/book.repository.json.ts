import type { Result } from "../../../shared/types/result.ts";
import type { BookRepository } from "../../domain/book.repository.ts";
import type { Book } from "../../domain/book.ts";
import {
  fetchBookById,
  fetchBookByTitle,
  fetchBooks,
} from "../api/apiClient.ts";

export class BookRespositoryJson implements BookRepository {
  async getAll(): Promise<Result<Book[]>> {
    try {
      const book = await fetchBooks();
      return { success: true, data: book };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  async getById(idBook: string): Promise<Result<Book>> {
    try {
      let book: Book = await fetchBookById(idBook);
      return { success: true, data: book };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  async getByTitle(title: string): Promise<Result<Book>> {
    try {
      let book: Book = await fetchBookByTitle(title);
      return { success: true, data: book };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  async createBook(book: Book): Promise<Result<Book>> {
    let result: Result<Book> = {
      success: true,
      data: book,
    };
    return result;
  }
  async updateBook(book: Book): Promise<Result<Book>> {
    let result: Result<Book> = {
      success: true,
      data: book,
    };
    return result;
  }
  async deleteBook(book: Book): Promise<Result<Book>> {
    let result: Result<Book> = {
      success: true,
      data: book,
    };
    return result;
  }
}
