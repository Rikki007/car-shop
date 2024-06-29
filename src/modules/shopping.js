import { ROOT_SHOPPING } from "./root";
import { LocaleStorageUtil, lsu } from '../utils/localStorageUtil.js';
import { CATALOG } from './catalog.js';

export class Shopping {

  handleClear() {
    ROOT_SHOPPING.innerHTML = '';
  }

  render () {

    const productsStore = lsu.getProducts();
    let htmlCatalog = '';
    let sum = 0;

    CATALOG.forEach(({ id, brand, model, price, }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class="shopping-element__brand">🚗 ${brand}</td>
            <td class="shopping-element__model">🇲🇰 ${model}</td>
            <td class="shopping-element__price">💲 ${price.toLocaleString()} BYN</td>
          </tr>
        `;

        sum += price;
      }
    });

    const html = `
      <div class="shopping-container">
        <div class="shopping__close"></div>
        <table>
          ${htmlCatalog}
          <tr>
            <td class="shopping-element__brand">SUM</td>
            <td class="shopping-element__brand"></td>
            <td class="shopping-element__price">💲 ${sum.toLocaleString()} BYN</td>
          </tr>
        </table>
      </div>
    `;
    ROOT_SHOPPING.innerHTML = html;

    const closeBtn = document.querySelector('.shopping__close');
    closeBtn.addEventListener('click', () => {
      this.handleClear();
    });

  }
}

export const shoppingPage = new Shopping;