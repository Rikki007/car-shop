import { ROOT_FOOTER } from "./root";

class Footer {
  render() {
    const html = `
      <div class="footer-container">
        <div class="contacts">
        
          <a href="https://github.com/Rikki007" class="contacts__link">
            Kirill Oreshkevich
            <div class="contacts__img"></div>
          </a>
          
        </div>
      </div>
    `;

    ROOT_FOOTER.innerHTML = html;
  }
}

export const footer = new Footer;