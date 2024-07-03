import { ROOT_SPINNER } from './root.js'

class Spinner {
  clear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    const html = `
      <div class="spinner-container">
        <div class="spinner__img"></div>
      </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }

}

export const spinner = new Spinner();