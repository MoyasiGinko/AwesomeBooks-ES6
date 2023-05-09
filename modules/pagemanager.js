class pageManager {
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
    [this.#list, this.#addBook, this.#contact] = document.querySelectorAll('#nav-links li');
    this.#listContainer = document.getElementById('list-container');
    this.#addContainer = document.getElementById('main');
    this.#contactContainer = document.getElementById('contact');
    this.hideNavLinks();
    this.addNav();
    this.listNav();
    this.contactNav();
  }

  hideNavLinks = () => {
    this.#addContainer.style.display = 'none';
    this.#contactContainer.style.display = 'none';
  };

  addNav = () => {
    this.#addBook.addEventListener('click', () => {
      this.#listContainer.style.display = 'none';
      this.#addContainer.style.display = 'flex';
      this.#contactContainer.style.display = 'none';
      const update = document.querySelector('#header h2');
      update.textContent = 'Add a new book';
    });
  };

  listNav = () => {
    this.#list.addEventListener('click', () => {
      this.#listContainer.style.display = 'flex';
      this.#addContainer.style.display = 'none';
      this.#contactContainer.style.display = 'none';
      const update = document.querySelector('#header h2');
      update.textContent = 'All awesome books';
    });
  };

  contactNav = () => {
    this.#contact.addEventListener('click', () => {
      this.#listContainer.style.display = 'none';
      this.#addContainer.style.display = 'none';
      this.#contactContainer.style.display = 'flex';
      const update = document.querySelector('#header h2');
      update.textContent = 'Contact information';
    });

    this.#contactContainer.innerHTML = `
      <p>Do have any questions or you just want to say "Hello"? <br> You can reach out to us!</p>
      <ul>
          <li>Our e-mail: mail@mail.com</li>
          <li>Our phone number: 004358653442</li>
          <li>Our address: Streetname 22, 84503 City, Country</li>
      </ul>
    `;
  };
}

export default pageManager;