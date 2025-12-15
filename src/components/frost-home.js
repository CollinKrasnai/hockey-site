import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './frost-hero.js';

export class FrostHome extends DDDSuper(LitElement) {
  static get tag() { return 'frost-home'; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }
      h3 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-xxl);
        border-bottom: 3px solid var(--ddd-theme-default-skyBlue);
        padding-bottom: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
      <frost-hero></frost-hero>
      <div class="container">
        <h3>Latest News</h3>
        <p>Welcome to the 2025 season. Tryouts have concluded and our roster is set. Check out the schedule page for upcoming games.</p>
      </div>
    `;
  }
}
customElements.define(FrostHome.tag, FrostHome);
