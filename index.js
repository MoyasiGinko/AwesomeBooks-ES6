/* eslint-disable */

import UI from './modules/ui.js';
import Store from './modules/store.js';

const ui = new UI();
const store = new Store();

ui.render(store.getLibrary());
ui.attachFormSubmit(store.addBook);
