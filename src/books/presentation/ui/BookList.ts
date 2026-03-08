import { getAllBooksUseCase } from "../../dependencies/books";
import type { Book } from "../../domain/book";
import BookListLayout from "../layout/BookListLayout.html?raw";

class BookList extends HTMLElement {
  isFirst = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    const books = await getAllBooksUseCase();
    if (!this.shadowRoot || !BookListLayout.length || !books.success) return;
    this.shadowRoot.innerHTML = BookListLayout;
    const main_galery = this.shadowRoot.getElementById("main_galery");
    if (!main_galery) return;
    books.data.forEach((book: Book) => {
      console.log(`titulo: ${book.title}`);
    });
    this.eventHandler;
  }

  eventHandler() {
    if (!this.shadowRoot) return;
    const main_nav_item = this.shadowRoot.querySelectorAll(".main__nav-item");
    main_nav_item.forEach((item) => {
      item.addEventListener("click", () => {
        main_nav_item.forEach((b) => b.classList.remove("active"));
        item.classList.add("active");
        if (!this.isFirst) {
          alert("Esta funcionalidad todavia no esta implementada");
          this.isFirst = true;
        }
      });
    });
  }
}

customElements.define("book-list", BookList);
