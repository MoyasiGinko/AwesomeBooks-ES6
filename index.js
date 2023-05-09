/* eslint-disable */
import { DateTime } from './modules/luxon.js';
import UI from './modules/ui.js';
import Store from './modules/store.js';
import pageManager from './modules/pagemanager.js';

new UI();
new Store();
new pageManager();

const date = document.querySelector('#date');
setInterval(() => {
  const now = DateTime.now();
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);