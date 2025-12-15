import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostGameCard extends DDDSuper(LitElement) {
  static get tag() { return 'frost-game-card'; }

  static get properties() { return { game: { type: Object } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; margin-bottom: var(--ddd-spacing-4); }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--ddd-theme-default-white);
        border-left: 5px solid var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-4);
        box-shadow: var(--ddd-boxShadow-sm);
        border-radius: 4px;
      }
      .date { font-weight: bold; color: var(--ddd-theme-default-coalyGray); }
      .opp { font-size: var(--ddd-font-size-l); font-weight: bold; }
      .badge {
        background-color: var(--ddd-theme-default-skyBlue);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
      }
    `];
  }

  render() {
    return html`
      <div class="row">
        <div>
          <div class="date">${this.game.date} @ ${this.game.time}</div>
          <div class="opp">vs ${this.game.opponent}</div>
        </div>
        <div class="badge">${this.game.location}</div>
      </div>
    `;
  }
}
customElements.define(FrostGameCard.tag, FrostGameCard);
