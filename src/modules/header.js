import { ROOT_HEADER } from "./root";
import { LocaleStorageUtil, lsu } from '../utils/localStorageUtil.js';

export class Header {

  render(count) {

    const html = `
      <div class="header-container">
        <div class="header-logo">
          <div class="header-logo__pic"></div>
          <h1 class="header-logo__title">Car Shop</h1>
        </div>
        <p class="counter">
          🛒 ${count}
        </p>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }

}

export const headerPage = new Header;
const countOfProducts = lsu.getProducts().length;

headerPage.render(countOfProducts);