import { CATALOG } from './catalog.js';
import { ROOT_PRODUCTS } from './root.js';
import { LocaleStorageUtil, lsu } from '../utils/localStorageUtil.js';
import { Header, headerPage } from './header.js';


class Products {

  constructor() {
    this.classNameActive = 'product-item__btn_active';
    this.labelAdd = 'Add to basket';
    this.labelRemove = 'Delete from basket';

  }

  handleSetLocationStorage(elem, id) {

    const { isPushProduct, products } = lsu.setProducts(id);

    if (isPushProduct) {
      elem.classList.add(this.classNameActive);
      elem.innerHTML = this.labelRemove;
    } else {
      elem.classList.remove(this.classNameActive);
      elem.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);

  }

  render() {

    const productsStore = lsu.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({ id, brand, model, img, price, }) => {

      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = this.labelRemove;
      }
      
      htmlCatalog += `
        <li class="product-item">
          <h3 class="product-item__brand">${brand}</h3>
          <h3 class="product-item__model">${model}</h3>
          <img class="product-item__img"src="${img}" alt="picture">
          <span class="product-item__price">💲 ${price.toLocaleString()} BYN</span>
          <button class="product-item__btn${activeClass}" data-id="${id}">
            ${activeText}
          </button>

        </li>

      `;

    });

    const html = `
      
        <ul class="product-container">

          ${htmlCatalog}
    
        </ul>

    `;

    ROOT_PRODUCTS.innerHTML = html;

    const buttons = document.querySelectorAll('.product-item__btn');
    buttons.forEach((item) => {
      item.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        this.handleSetLocationStorage(event.target, id);
      });
    });

  }
}

const prod = new Products;
prod.render();