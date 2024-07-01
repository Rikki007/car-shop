import { ROOT_ERROR } from "./root";

class Error {
  render() {
    const html = `
      <div class="error-container">
        <div class="error-message">
          <h3>No access!</h3>
          <p>Try logging in later.</p>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

export const errorPage = new Error();
