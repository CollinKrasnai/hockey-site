import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './frost-game-card.js';

export class FrostSchedule extends DDDSuper(LitElement) {
  static get tag() { return 'frost-schedule'; }

  static get properties() { return { games: { type: Array } }; }

  constructor() {
    super();
    this.games = [];
    this.fetchSchedule();
  }

  async fetchSchedule() {
    const res = await fetch('/api/schedule');
    this.games = await res.json();
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; padding: var(--ddd-spacing-6); max-width: 800px; margin: 0 auto; }
      h2 { color: var(--ddd-theme-default-navy80); text-align: center; }
    `];
  }

  render() {
    return html`
      <h2>Season Schedule</h2>
      ${this.games.map(g => html`<frost-game-card .game="${g}"></frost-game-card>`)}
    `;
  }
}
customElements.define(FrostSchedule.tag, FrostSchedule);
