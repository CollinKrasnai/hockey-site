import { LitElement, html, css } from 'lit';

export class ClubFooter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--ddd-dark-gray);
        color: var(--ddd-gray);
        padding: var(--ddd-spacing-xl) 0;
        margin-top: var(--ddd-spacing-xl);
        text-align: center;
      }
      p { margin: 0; }
      .links {
        margin-top: var(--ddd-spacing-md);
        display: flex;
        justify-content: center;
        gap: 20px;
      }
      a { color: var(--ddd-accent); text-decoration: none; }
      a:hover { text-decoration: underline; }
    `;
  }

  render() {
    return html`
      <footer>
        <p>&copy; 2025 Frostbite Hockey Academy. All Rights Reserved.</p>
        <p>Developing Excellence on and off the Ice.</p>
        <div class="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Board</a>
          <a href="#">SafeSport</a>
        </div>
      </footer>
    `;
  }
}
customElements.define('club-footer', ClubFooter);