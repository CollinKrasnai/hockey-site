import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostHeader extends DDDSuper(LitElement) {
  static get tag() { return 'frost-header'; }

  static get properties() {
    return {
      items: { type: Array },
      path: { type: String }
    };
  }

  constructor() {
    super();
    this.items = [];
    this.fetchMenu();
  }

  async fetchMenu() {
    try {
      const response = await fetch('/api/menu');
      this.items = await response.json();
    } catch (e) {
      console.error("Error fetching menu", e);
    }
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4);
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: var(--ddd-boxShadow-md);
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        margin: 0;
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-black);
        letter-spacing: 1px;
      }
      nav {
        display: flex;
        gap: var(--ddd-spacing-4);
      }
      a {
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-medium);
        padding: var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        transition: background-color 0.3s;
      }
      a:hover, a.active {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }
      @media (max-width: 768px) {
        .wrapper { flex-direction: column; gap: var(--ddd-spacing-2); }
      }
    `];
  }

  _handleClick(e, link) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('route-changed', {
      detail: link,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>FROSTBITE ACADEMY</h1>
        <nav>
          ${this.items.map(item => html`
            <a 
              href="${item.link}" 
              class="${this.path === item.link ? 'active' : ''}"
              @click="${(e) => this._handleClick(e, item.link)}"
            >${item.text}</a>
          `)}
        </nav>
      </div>
    `;
  }
}
customElements.define(FrostHeader.tag, FrostHeader);
