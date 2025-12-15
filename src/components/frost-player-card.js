import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostPlayerCard extends DDDSuper(LitElement) {
  static get tag() { return 'frost-player-card'; }

  static get properties() {
    return {
      player: { type: Object }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .card {
        background: var(--ddd-theme-default-white);
        border: 1px solid var(--ddd-theme-default-limestoneGray);
        border-radius: var(--ddd-radius-md);
        overflow: hidden;
        text-align: center;
        box-shadow: var(--ddd-boxShadow-sm);
        transition: transform 0.2s;
      }
      .card:hover {
        transform: translateY(-5px);
        box-shadow: var(--ddd-boxShadow-md);
      }
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        background-color: var(--ddd-theme-default-limestoneGray);
      }
      .info { padding: var(--ddd-spacing-4); }
      .number {
        font-weight: bold;
        color: var(--ddd-theme-default-skyBlue);
        font-size: var(--ddd-font-size-l);
      }
      .name {
        font-weight: bold;
        color: var(--ddd-theme-default-navy80);
        margin: var(--ddd-spacing-2) 0;
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.player.image}" alt="${this.player.name}" loading="lazy" />
        <div class="info">
          <div class="number">#${this.player.number}</div>
          <div class="name">${this.player.name}</div>
          <div class="pos">${this.player.position}</div>
        </div>
      </div>
    `;
  }
}
customElements.define(FrostPlayerCard.tag, FrostPlayerCard);
