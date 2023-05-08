class Store {
#root;
#list;
#addBook;
#contact;
#listContainer;
#addContainer;
#contactContainer;
#library;

constructor() {
    this.#root = document.querySelector("#main");
    this.#library = JSON.parse(localStorage.getItem("library")) || [];
    this.#list = document.querySelectorAll("#nav-links li")[0];
    this.#addBook = document.querySelectorAll("#nav-links li")[1];
    this.#contact = document.querySelectorAll("#nav-links li")[2];
    this.#listContainer = document.getElementById("list-container");
    this.#addContainer = document.getElementById("main");
    this.#contactContainer = document.getElementById("contact");
    this.addBook();
    this.deleteBook();
    this.render();
    this.saveLibrary();
}

addBook = () => {
    const form = document.querySelector("#form-container");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.querySelector("#title");
      const author = document.querySelector("#author");

      if (title.value.trim() === "" || author.value.trim() === "") {
        alert("Please enter a title and author");
        return;
      }

      const book = {
        title: title.value,
        author: author.value,
      };

      this.#library.push(book);
      title.value = "";
      author.value = "";

      this.render();
      this.#listContainer.style.display = "none";
    });
};

saveLibrary = () => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("library", JSON.stringify(this.#library));
    });
  };

deleteBook = () => {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-book")) {
        const bookIndex = event.target.dataset.index;
        this.#library.splice(bookIndex, 1);

        this.render();
      }
    });
};

render = () => {
    const libraryContainer = document.getElementById("library-container");
    const border = document.getElementById("list-container");
    border.style.display = 'none';
    libraryContainer.innerHTML = "";

    this.#library.forEach((book, index) => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");
        bookContainer.innerHTML = `
        <ul class="book-items">
            <li class="book-title">"${book.title}" by ${book.author}</li>
            <button type="button" class="remove-book" data-index="${index}">Remove</button>
        </ul>
        `;

        if (this.#library.length !== 0) {
        border.style.display = 'block';
        }
        libraryContainer.appendChild(bookContainer);
    });
};
}

export default Store;