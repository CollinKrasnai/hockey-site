import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostStats extends DDDSuper(LitElement) {
  static get tag() { return 'frost-stats'; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; padding: var(--ddd-spacing-6); max-width: 1000px; margin: 0 auto; }
      .stat-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-4);
        text-align: center;
      }
      .stat-box {
        background: var(--ddd-theme-default-navy80);
        color: white;
        padding: var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-md);
      }
      .num { font-size: 3rem; font-weight: bold; }
    `];
  }

  render() {
    return html`
      <div class="stat-grid">
        <div class="stat-box">
          <div class="num">12</div>
          <div>Wins</div>
        </div>
        <div class="stat-box">
          <div class="num">45</div>
          <div>Goals For</div>
        </div>
        <div class="stat-box">
          <div class="num">92%</div>
          <div>Penalty Kill</div>
        </div>
      </div>
    `;
  }
}
customElements.define(FrostStats.tag, FrostStats);
