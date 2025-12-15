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
        height: 500px; /* Increased height slightly to fit logo */
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
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .hero-logo {
        width: 180px;
        height: auto;
        margin-bottom: var(--ddd-spacing-4);
        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
      }
      h2 {
        font-size: var(--ddd-font-size-4xl);
        margin-bottom: var(--ddd-spacing-2);
        text-transform: uppercase;
        margin-top: 0;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
      p {
        font-size: var(--ddd-font-size-l);
        max-width: 600px;
        margin: 0 auto;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      }
    `];
  }

  render() {
    return html`
      <div class="content">
        <img src="/logo.png" alt="Frostbite Academy Logo" class="hero-logo" />
        <h2>Defend the Ice</h2>
        <p>Elite youth development program focusing on speed, skill, and sportsmanship.</p>
      </div>
    `;
  }
}
customElements.define(FrostHero.tag, FrostHero);
