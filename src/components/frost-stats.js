import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FrostStats extends DDDSuper(LitElement) {
  static get tag() { return 'frost-stats'; }

  static get styles() {
    return [super.styles, css`
      :host { 
        display: block; 
        padding: var(--ddd-spacing-6); 
        max-width: 1000px; 
        margin: 0 auto; 
      }
      h2 {
        color: var(--ddd-theme-default-navy80);
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }
      .stat-grid {
        display: grid;
        /* Changed to 4 columns to accommodate the new card */
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-6);
        text-align: center;
      }
      .stat-box {
        background: var(--ddd-theme-default-white);
        border: 2px solid var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-boxShadow-md);
        transition: transform 0.2s ease;
      }
      .stat-box:hover {
        transform: translateY(-5px);
        background: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
      }
      .stat-box:hover .label {
        color: var(--ddd-theme-default-skyBlue);
      }
      .num { 
        font-size: var(--ddd-font-size-4xl); 
        font-weight: 900; 
        line-height: 1;
        margin-bottom: var(--ddd-spacing-2);
      }
      .label {
        font-size: var(--ddd-font-size-ms);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    `];
  }

  render() {
    return html`
      <h2>Team Statistics</h2>
      <div class="stat-grid">
        <div class="stat-box">
          <div class="num">12</div>
          <div class="label">Wins</div>
        </div>
        
        <div class="stat-box">
          <div class="num">2</div>
          <div class="label">Losses</div>
        </div>

        <div class="stat-box">
          <div class="num">45</div>
          <div class="label">Goals For</div>
        </div>
        
        <div class="stat-box">
          <div class="num">92%</div>
          <div class="label">Penalty Kill</div>
        </div>
      </div>
    `;
  }
}
customElements.define(FrostStats.tag, FrostStats);
