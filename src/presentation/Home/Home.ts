import "../../books/presentation/ui/BookList.ts";

const Home = () => {
  const fragment = document.createDocumentFragment();
  //const main_content = document.createElement("main-content");
  //main_content.id = "middle-node";
  const main_content = document.createElement("book-list");
  main_content.id = "middle-node";
  fragment.appendChild(main_content);

  return Promise.resolve(fragment);
};

export default Home;
