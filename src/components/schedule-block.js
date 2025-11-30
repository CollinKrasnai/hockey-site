import { LitElement, html, css } from 'lit';

export class ScheduleBlock extends LitElement {
  static get properties() {
    return {
      games: { type: Array }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: var(--ddd-spacing-lg) 0;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        background: var(--ddd-white);
        border-radius: var(--ddd-radius);
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      th {
        background-color: var(--ddd-secondary);
        color: var(--ddd-white);
        padding: 12px;
        text-align: left;
      }
      td {
        padding: 12px;
        border-bottom: 1px solid var(--ddd-gray);
        color: var(--ddd-dark-gray);
      }
      tr:last-child td { border-bottom: none; }
      
      .home-game {
        font-weight: bold;
        color: var(--ddd-primary);
      }
    `;
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          ${this.games.map(game => html`
            <tr>
              <td>${game.date}</td>
              <td class="${game.home ? 'home-game' : ''}">${game.home ? 'vs' : '@'} ${game.opponent}</td>
              <td>${game.location}</td>
              <td>${game.time}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
customElements.define('schedule-block', ScheduleBlock);