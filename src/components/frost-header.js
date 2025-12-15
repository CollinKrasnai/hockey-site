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
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-bottom: 4px solid var(--ddd-theme-default-skyBlue);
      }
      
      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        height: 60px;
      }

      .brand-container {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-4);
        text-decoration: none; /* No underline on the logo area */
        color: white;
        cursor: pointer;
      }

      .logo {
        height: 50px;
        width: auto;
        object-fit: contain;
        transition: transform 0.3s ease;
      }

      .brand-container:hover .logo {
        transform: rotate(-5deg) scale(1.1);
      }

      h1 {
        margin: 0;
        font-size: var(--ddd-font-size-l);
        font-weight: 900;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-style: italic;
      }

      nav {
        display: flex;
        gap: var(--ddd-spacing-6);
      }

      a {
        position: relative;
        color: var(--ddd-theme-default-white);
        text-decoration: none; /* Explicitly removed underline */
        font-weight: bold;
        font-size: var(--ddd-font-size-ms);
        padding: var(--ddd-spacing-2) 0;
        transition: color 0.3s ease;
      }

      /* Ensure hover doesn't trigger default underline */
      a:hover, a:focus, a:active, a:visited {
        text-decoration: none;
        color: var(--ddd-theme-default-skyBlue);
        outline: none;
      }

      /* Animated Underline Effect */
      a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--ddd-theme-default-skyBlue);
        transition: width 0.3s ease-in-out;
      }

      a:hover::after {
        width: 100%;
      }

      a.active {
        color: var(--ddd-theme-default-skyBlue);
      }

      a.active::after {
        width: 100%;
      }

      @media (max-width: 768px) {
        .wrapper { 
          flex-direction: column; 
          height: auto; 
          gap: var(--ddd-spacing-4);
          padding-bottom: var(--ddd-spacing-4);
        }
        h1 { font-size: var(--ddd-font-size-m); }
        .logo { height: 40px; }
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
        <a href="/" class="brand-container" @click="${(e) => this._handleClick(e, '/')}">
          <img src="/logo.png" alt="Frostbite Academy Logo" class="logo" />
          <h1>Frostbite Academy</h1>
        </a>
        
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
