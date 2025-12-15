import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostGameCard extends DDDSuper(LitElement) {
  static get tag() { return 'frost-game-card'; }

  static get properties() { return { game: { type: Object } }; }

  static get styles() {
    return [super.styles, css`
      :host { 
        display: block; 
        margin-bottom: var(--ddd-spacing-4); 
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--ddd-theme-default-white);
        border-left: 6px solid var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-5);
        box-shadow: var(--ddd-boxShadow-sm);
        border-radius: var(--ddd-radius-sm);
        border: 1px solid var(--ddd-theme-default-limestoneGray);
      }
      .date-group {
        display: flex;
        flex-direction: column;
      }
      .date { 
        font-size: var(--ddd-font-size-xs);
        font-weight: bold; 
        color: var(--ddd-theme-default-navy80); 
        text-transform: uppercase;
        margin-bottom: var(--ddd-spacing-1);
      }
      .opp { 
        font-size: var(--ddd-font-size-l); 
        font-weight: bold; 
        /* Forced dark color for visibility */
        color: var(--ddd-theme-default-coalyGray); 
      }
      .badge {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-xs);
        font-weight: bold;
        font-size: var(--ddd-font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    `];
  }

  render() {
    return html`
      <div class="row">
        <div class="date-group">
          <div class="date">${this.game.date} • ${this.game.time}</div>
          <div class="opp">vs ${this.game.opponent}</div>
        </div>
        <div class="badge">${this.game.location}</div>
      </div>
    `;
  }
}
customElements.define(FrostGameCard.tag, FrostGameCard);
