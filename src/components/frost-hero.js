import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostHero extends DDDSuper(LitElement) {
  static get tag() { return 'frost-hero'; }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        position: relative;
        background-color: var(--ddd-theme-default-navy80);
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        overflow: hidden;
      }
      .content {
        z-index: 2;
        padding: var(--ddd-spacing-4);
      }
      h2 {
        font-size: var(--ddd-font-size-4xl);
        margin-bottom: var(--ddd-spacing-2);
        text-transform: uppercase;
      }
      p {
        font-size: var(--ddd-font-size-l);
        max-width: 600px;
        margin: 0 auto;
      }
    `];
  }

  render() {
    return html`
      <div class="content">
        <h2>Defend the Ice</h2>
        <p>Elite youth development program focusing on speed, skill, and sportsmanship.</p>
      </div>
    `;
  }
}
customElements.define(FrostHero.tag, FrostHero);
