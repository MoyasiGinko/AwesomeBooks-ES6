/* eslint-disable */
class UI {
#library;

#root;

#list;

#addBook;

#contact;

#listContainer;

#addContainer;

#contactContainer;

constructor() {
  this.#root = document.querySelector('#main');
  this.#library = JSON.parse(localStorage.getItem('library')) || [];
  this.#list = document.querySelectorAll('#nav-links li')[0];
  this.#addBook = document.querySelectorAll('#nav-links li')[1];
  this.#contact = document.querySelectorAll('#nav-links li')[2];
  this.#listContainer = document.getElementById('list-container');
  this.#addContainer = document.getElementById('main');
  this.#contactContainer = document.getElementById('contact');
  this.createForm();
}

  createForm = () => {
    this.#root.innerHTML = `
    <form id="form-container">
        <div class="form-items">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control" placeholder="Title">
        </div>
        <div class="form-items">
            <label for="author">Author</label>
            <input type="text" id="author" class="form-control" placeholder="Author">
        </div>
        <button type="submit" id="add-book">Add</button>
    </form>
    <div id="library-container"></div>
`;
  };

  attachFormSubmit(callback) {
    const form = document.querySelector('#form-container');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      callback();
    });
  }
}

export default UI;