import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './frost-player-card.js';

export class FrostRoster extends DDDSuper(LitElement) {
  static get tag() { return 'frost-roster'; }

  static get properties() {
    return {
      players: { type: Array }
    };
  }

  constructor() {
    super();
    this.players = [];
    this.fetchRoster();
  }

  async fetchRoster() {
    const res = await fetch('/api/roster');
    this.players = await res.json();
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; padding: var(--ddd-spacing-6); }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: var(--ddd-spacing-4);
        max-width: 1200px;
        margin: 0 auto;
      }
      h2 {
        text-align: center;
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-6);
      }
    `];
  }

  render() {
    return html`
      <h2>2025 Active Roster</h2>
      <div class="grid">
        ${this.players.map(p => html`
          <frost-player-card .player="${p}"></frost-player-card>
        `)}
      </div>
    `;
  }
}
customElements.define(FrostRoster.tag, FrostRoster);
