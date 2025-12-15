import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostStandings extends DDDSuper(LitElement) {
  static get tag() { return 'frost-standings'; }

  static get styles() {
    return [super.styles, css`
      :host { 
        display: block; 
        padding: var(--ddd-spacing-6); 
        max-width: 900px; 
        margin: 0 auto; 
      }
      h2 {
        color: var(--ddd-theme-default-navy80);
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
        font-size: var(--ddd-font-size-xxl);
      }
      .table-wrapper {
        border-radius: var(--ddd-radius-md);
        overflow: hidden;
        border: 1px solid var(--ddd-theme-default-navy80);
        box-shadow: var(--ddd-boxShadow-md);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        background: var(--ddd-theme-default-white);
      }
      th { 
        background: var(--ddd-theme-default-navy80); 
        color: var(--ddd-theme-default-white); 
        padding: var(--ddd-spacing-4); 
        text-align: left; 
        font-weight: bold;
        text-transform: uppercase;
        font-size: var(--ddd-font-size-xs);
        letter-spacing: 1px;
      }
      td { 
        padding: var(--ddd-spacing-4); 
        border-bottom: 1px solid var(--ddd-theme-default-limestoneGray);
        /* Force text to be dark */
        color: var(--ddd-theme-default-coalyGray);
        font-weight: 500;
      }
      /* Fix for the alternating rows */
      tr:nth-child(even) { 
        background-color: var(--ddd-theme-default-limestoneGray); 
      }
      tr:hover {
        background-color: var(--ddd-theme-default-skyBlue);
        cursor: default;
      }
      /* Special highlight for our team (Rank 1) */
      tr:first-child td {
        font-weight: bold;
      }
    `];
  }

  render() {
    return html`
      <h2>League Standings</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Frostbite Academy</td>
              <td>12</td>
              <td>2</td>
              <td>24</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Polar Bears</td>
              <td>10</td>
              <td>4</td>
              <td>20</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ice Breakers</td>
              <td>8</td>
              <td>6</td>
              <td>16</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Keystone Wild</td>
              <td>5</td>
              <td>9</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define(FrostStandings.tag, FrostStandings);
