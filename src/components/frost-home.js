import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './frost-hero.js';

export class FrostHome extends DDDSuper(LitElement) {
  static get tag() { return 'frost-home'; }

  static get styles() {
    return [super.styles, css`
      :host { 
        display: block; 
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-8);
      }
      .news-section {
        margin-top: var(--ddd-spacing-8);
      }
      h3 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-xxl);
        border-bottom: 4px solid var(--ddd-theme-default-skyBlue);
        padding-bottom: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-6);
      }
      .news-card {
        background-color: var(--ddd-theme-default-white);
        border: 1px solid var(--ddd-theme-default-limestoneGray);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-6);
        margin-bottom: var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .news-date {
        color: var(--ddd-theme-default-navy80);
        font-weight: bold;
        font-size: var(--ddd-font-size-xs);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: var(--ddd-spacing-2);
      }
      .news-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: bold;
        color: var(--ddd-theme-default-navy80);
        margin: 0 0 var(--ddd-spacing-3) 0;
      }
      .news-body {
        /* Explicitly setting dark color for visibility */
        color: var(--ddd-theme-default-coalyGray); 
        line-height: 1.6;
        font-size: var(--ddd-font-size-ms);
      }
    `];
  }

  render() {
    return html`
      <frost-hero></frost-hero>
      
      <div class="container">
        <div class="news-section">
          <h3>Latest Academy News</h3>

          <div class="news-card">
            <div class="news-date">December 10, 2024</div>
            <h4 class="news-title">Frostbite Academy Takes Gold at Winter Classic</h4>
            <p class="news-body">
              It was a weekend to remember as the Frostbite Varsity squad secured first place in the annual State College Winter Classic. 
              Led by Captain James Wilson's hat-trick in the final period, the team overcame a 2-goal deficit to defeat the Erie Otters 5-3. 
              "This team showed incredible resilience," said Head Coach Krasnai. "They never stopped skating."
            </p>
          </div>

          <div class="news-card">
            <div class="news-date">December 2, 2024</div>
            <h4 class="news-title">Skate for a Cure Charity Event Announced</h4>
            <p class="news-body">
              We are proud to announce our upcoming "Skate for a Cure" event scheduled for next month. 
              All proceeds from ticket sales and the silent auction will go towards local pediatric cancer research. 
              Community members are invited to join the players on the ice for a free skate session following the exhibition match.
            </p>
          </div>

        </div>
      </div>
    `;
  }
}
customElements.define(FrostHome.tag, FrostHome);
