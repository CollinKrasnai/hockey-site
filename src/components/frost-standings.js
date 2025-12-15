import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostStandings extends DDDSuper(LitElement) {
  static get tag() { return 'frost-standings'; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; padding: var(--ddd-spacing-6); max-width: 800px; margin: 0 auto; }
      table {
        width: 100%;
        border-collapse: collapse;
        background: white;
      }
      th { background: var(--ddd-theme-default-navy80); color: white; padding: 12px; text-align: left; }
      td { padding: 12px; border-bottom: 1px solid #ddd; }
      tr:nth-child(even) { background-color: var(--ddd-theme-default-limestoneGray); }
    `];
  }

  render() {
    return html`
      <h2>League Standings</h2>
      <table>
        <tr><th>Team</th><th>W</th><th>L</th><th>PTS</th></tr>
        <tr><td>Frostbite Academy</td><td>12</td><td>2</td><td>24</td></tr>
        <tr><td>Polar Bears</td><td>10</td><td>4</td><td>20</td></tr>
        <tr><td>Ice Breakers</td><td>8</td><td>6</td><td>16</td></tr>
      </table>
    `;
  }
}
customElements.define(FrostStandings.tag, FrostStandings);
