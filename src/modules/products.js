import { CATALOG } from './catalog.js';
import { ROOT_PRODUCTS } from './root.js';

class Products {
  render() {

    let htmlCatalog = '';

    CATALOG.forEach(({ id, brand, model, img, price, }) => {
      
      htmlCatalog += `
        <li>
          <span>${brand}</span>
          <span>${model}</span>
          <img src="${img}" alt="picture">
          <span>${price}</span>
          <button>Add to bascet</button>

        </li>

      `;

    });

    const html = `
      
        <ul>

          ${htmlCatalog}
    
        </ul>

    `;

    ROOT_PRODUCTS.innerHTML = html;

  }
}

const prod = new Products;
prod.render();