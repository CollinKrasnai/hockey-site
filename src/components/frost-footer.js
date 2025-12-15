import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostFooter extends DDDSuper(LitElement) {
  static get tag() { return 'frost-footer'; }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-8) 0;
        text-align: center;
        margin-top: auto;
      }
      p {
        margin: 0;
        font-size: var(--ddd-font-size-xs);
      }
    `];
  }

  render() {
    return html`
      <footer>
        <p>&copy; 2025 Frostbite Hockey Academy. Built for excellence.</p>
      </footer>
    `;
  }
}
customElements.define(FrostFooter.tag, FrostFooter);
