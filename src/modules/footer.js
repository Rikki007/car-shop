import { ROOT_FOOTER } from "./root";

class Footer {
  render() {
    const html = `
      <div class="footer-container">
        <div class="contacts">
          <a href="https://github.com/Rikki007" class="contacts__link">Kirill Oreshkevich</a>
          <div class="contacts__img"></div>
        </div>
      </div>
    `;

    ROOT_FOOTER.innerHTML = html;
  }
}

const footer = new Footer;
footer.render();