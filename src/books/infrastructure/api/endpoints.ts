const BASE_URL = "/library/books";
export const BOOK_API = {
  getAll: `${BASE_URL}/index.json`,
  getById: (id: string) => `${BASE_URL}/${id}/index.json`,
  getByTitle: (title: string) => `${BASE_URL}/${title}/index.json`,
};
