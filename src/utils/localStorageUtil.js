export class LocaleStorageUtil {
  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    const productsLocaleStorage = localStorage.getItem(this.keyName);
    if (productsLocaleStorage !== null) {
      return JSON.parse(productsLocaleStorage);
    }
    return [];
  }

  setProducts(id) {
    let products = this.getProducts();
    let isPushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      isPushProduct = true;
    } else {
      products.splice(index, 1);
    }

    
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { isPushProduct, products };
  }
}

export const lsu = new LocaleStorageUtil();

