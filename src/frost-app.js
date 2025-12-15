import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './components/frost-header.js';
import './components/frost-footer.js';
import './components/frost-home.js';
import './components/frost-roster.js';
import './components/frost-schedule.js';
import './components/frost-standings.js';
import './components/frost-stats.js';

export class FrostApp extends DDDSuper(LitElement) {
  static get tag() { return 'frost-app'; }

  static get properties() {
    return {
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-white);
      }
      main {
        flex: 1;
        max-width: 1440px;
        margin: 0 auto;
        width: 100%;
      }
    `];
  }

  constructor() {
    super();
    this.route = window.location.pathname;
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  // Custom event handler for navigation from header
  handleNav(e) {
    const path = e.detail;
    window.history.pushState({}, "", path);
    this.route = path;
    window.scrollTo(0, 0);
  }

  render() {
    let content;
    switch(this.route) {
      case '/roster':
        content = html`<frost-roster></frost-roster>`;
        break;
      case '/schedule':
        content = html`<frost-schedule></frost-schedule>`;
        break;
      case '/standings':
        content = html`<frost-standings></frost-standings>`;
        break;
      case '/stats':
        content = html`<frost-stats></frost-stats>`;
        break;
      default:
        content = html`<frost-home></frost-home>`;
    }

    return html`
      <frost-header .path="${this.route}" @route-changed="${this.handleNav}"></frost-header>
      <main>
        ${content}
      </main>
      <frost-footer></frost-footer>
    `;
  }
}
customElements.define(FrostApp.tag, FrostApp);
