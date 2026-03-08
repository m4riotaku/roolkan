export const BOOK_API = {
  getAll: "/api/books",
  getById: (id: string) => `/api/books/${id}`,
  getByTitle: (title: string) => `/api/books/${title}`,
};
