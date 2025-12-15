import { LitElement, html, css } from 'lit';

export class HeroBanner extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        height: 400px;
        background-color: var(--ddd-primary);
        color: var(--ddd-white);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
      }
      .bg-image {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        object-fit: cover;
        opacity: 0.4;
        z-index: 1;
      }
      .content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        padding: 20px;
      }
      h1 {
        font-size: 3rem;
        margin: 0 0 16px 0;
        font-family: var(--ddd-font-display);
      }
      ::slotted(a) {
        display: inline-block;
        background-color: var(--ddd-accent);
        color: var(--ddd-white);
        padding: 12px 24px;
        text-decoration: none;
        font-weight: bold;
        border-radius: 4px;
        margin-top: 16px;
        transition: transform 0.2s;
      }
      ::slotted(a:hover) {
        transform: scale(1.05);
      }
    `;
  }
  render() {
    return html`
      <img class="bg-image" src="https://picsum.photos/id/158/1200/400" alt="Ice Hockey Rink">
      <div class="content">
        <h1>Welcome to The Ice Den</h1>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('hero-banner', HeroBanner);
