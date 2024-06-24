import { CATALOG } from './catalog.js';
import { ROOT_PRODUCTS } from './root.js';

class Products {
  render() {

    let htmlCatalog = '';

    CATALOG.forEach(({ id, brand, model, img, price, }) => {
      
      htmlCatalog += `
        <li class="product-item">
          <h3 class="product-item__brand">${brand}</h3>
          <h3 class="product-item__model">${model}</h3>
          <img class="product-item__img"src="${img}" alt="picture">
          <span class="product-item__price">💲 ${price.toLocaleString()} BYN</span>
          <button class="product-item__btn">Add to bascet</button>

        </li>

      `;

    });

    const html = `
      
        <ul class="product-container">

          ${htmlCatalog}
    
        </ul>

    `;

    ROOT_PRODUCTS.innerHTML = html;

  }
}

const prod = new Products;
prod.render();