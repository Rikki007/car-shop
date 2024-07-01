import './index.html';
import './style.scss';
import './modules/products.js';
import './modules/header.js';
import './modules/shopping.js';
import './modules/footer.js';
import './utils/localStorageUtil.js';
import './server/catalog.json';
import './modules/spinner.js';
import './modules/error.js';


import { lsu } from './utils/localStorageUtil.js';
import { headerPage } from './modules/header.js';
import { prod } from './modules/products.js';
import { footer } from './modules/footer.js';
import { spinner } from './modules/spinner.js';
import { errorPage } from './modules/error.js';

function render() {
  const countOfProducts = lsu.getProducts().length;

  headerPage.render(countOfProducts);
  prod.render();
  footer.render();
}

spinner.render();

export let CATALOG = [];

fetch('server/catalog.json')
  .then((res) =>  res.json())
  .then((body) => {
    CATALOG = body;
    spinner.clear();
    render();
  })
  .catch((error) => {
    spinner.clear();
    errorPage.render();
  });