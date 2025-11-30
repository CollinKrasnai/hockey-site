import { LitElement, html, css } from 'lit';

export class ClubHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--ddd-primary);
        color: var(--ddd-white);
        padding: var(--ddd-spacing-md) var(--ddd-spacing-lg);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        position: sticky;
        top: 0;
        z-index: 100;
      }

      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
      }

      h1 {
        margin: 0;
        font-family: var(--ddd-font-display);
        letter-spacing: 1px;
        font-size: 1.8rem;
      }

      .logo-mark {
        color: var(--ddd-accent);
      }

      /* Mobile Menu Button */
      .menu-btn {
        display: none;
        background: none;
        border: 2px solid var(--ddd-white);
        color: var(--ddd-white);
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 4px;
      }

      /* Desktop Nav */
      nav ul {
        display: flex;
        gap: var(--ddd-spacing-lg);
        list-style: none;
        margin: 0;
        padding: 0;
      }

      nav a {
        color: var(--ddd-white);
        text-decoration: none;
        font-weight: 500;
        padding: 5px 10px;
        border-radius: 4px;
        transition: background 0.2s;
      }

      nav a:hover {
        background-color: rgba(255,255,255,0.1);
      }

      @media (max-width: 768px) {
        .menu-btn { display: block; }
        
        nav {
          display: none; /* Hidden by default on mobile, purely visual here for brevity */
        }
        
        :host([menu-open]) nav {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--ddd-secondary);
          padding: 20px;
        }
        
        nav ul {
          flex-direction: column;
        }
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      menuOpen: { type: Boolean, reflect: true, attribute: 'menu-open' }
    };
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <div class="header-container">
        <h1><span class="logo-mark">❄</span> ${this.title}</h1>
        <button class="menu-btn" @click="${this.toggleMenu}">☰ Menu</button>
        <nav>
          <slot></slot> 
        </nav>
      </div>
    `;
  }
}

customElements.define('club-header', ClubHeader);