const Home = () => {
  const fragment = document.createDocumentFragment();
  //const main_content = document.createElement("main-content");
  //main_content.id = "middle-node";
  const main_content = document.createElement("h1");
  main_content.id = "middle-node";
  main_content.innerText = "HELLO WORLD";
  fragment.appendChild(main_content);

  return Promise.resolve(fragment);
};

export default Home;
