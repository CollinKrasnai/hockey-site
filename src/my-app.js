import { LitElement, html, css } from 'lit';
import './components/club-header.js';
import './components/club-footer.js';
import './components/sports-card.js';
import './components/schedule-block.js';
import './components/hero-banner.js';

class MyApp extends LitElement {
  static get properties() {
    return {
      page: { type: String },
      menuItems: { type: Array },
      rosterData: { type: Array },
      scheduleData: { type: Array },
      loading: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: var(--ddd-font-primary);
        background-color: var(--ddd-gray);
        color: var(--ddd-dark-gray);
      }

      main {
        flex-grow: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-lg);
        width: 100%;
        box-sizing: border-box;
      }

      /* Responsive Grid for Gallery */
      .roster-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--ddd-spacing-md);
      }

      /* Dark Mode Support */
      @media (prefers-color-scheme: dark) {
        :host {
          background-color: #121212;
          color: #e0e0e0;
        }
      }
    `;
  }

  constructor() {
    super();
    this.page = 'home';
    this.menuItems = [];
    this.rosterData = [];
    this.scheduleData = [];
    this.loading = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
    this.handleRouting();
    window.addEventListener('popstate', () => this.handleRouting());
  }

  handleRouting() {
    const urlParams = new URLSearchParams(window.location.search);
    this.page = urlParams.get('page') || 'home';
    
    // Fetch page specific data
    if (this.page === 'home' || this.page === 'roster') {
      this.loadRoster();
    } else if (this.page === 'schedule') {
      this.loadSchedule();
    }
  }

  async loadMenu() {
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      this.menuItems = data.items;
    } catch (e) {
      console.error("Error loading menu", e);
    }
  }

  async loadRoster() {
    if (this.rosterData.length > 0) return; // Cache
    this.loading = true;
    try {
      const res = await fetch('/api/index');
      this.rosterData = await res.json();
      
      // Setup IntersectionObserver after render
      setTimeout(() => this.setupObserver(), 100);
    } catch (e) {
      console.error("Error loading roster", e);
    } finally {
      this.loading = false;
    }
  }

  async loadSchedule() {
    try {
      const res = await fetch('/api/schedule');
      this.scheduleData = await res.json();
    } catch (e) {
      console.error("Error loading schedule", e);
    }
  }

  // Lazy Loading Implementation
  setupObserver() {
    const cards = this.shadowRoot.querySelectorAll('sports-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    cards.forEach(card => observer.observe(card));
  }

  _navigate(e, slug) {
    e.preventDefault();
    window.history.pushState({}, '', `?page=${slug}`);
    this.handleRouting();
  }

  render() {
    return html`
      <club-header title="Frostbite Academy">
        <ul>
          ${this.menuItems.map(item => html`
            <li><a href="?page=${item.slug}" @click="${(e) => this._navigate(e, item.slug)}">${item.title}</a></li>
          `)}
        </ul>
      </club-header>

      ${this.page === 'home' ? html`
        <hero-banner>
           <h3>Join the Elite 2025 Season</h3>
           <a href="?page=roster" @click="${(e) => this._navigate(e, 'roster')}">View Roster</a>
        </hero-banner>
      ` : ''}

      <main>
        ${this.renderPageContent()}
      </main>

      <club-footer></club-footer>
    `;
  }

  renderPageContent() {
    switch (this.page) {
      case 'home':
        return html`
          <h2>Latest News & Roster Preview</h2>
          <p>Analyzing the competition (SCYIHA) taught us one thing: Speed kills. Our new roster is built for speed.</p>
          <div class="roster-grid">
            ${this.rosterData.slice(0, 8).map(player => html`
              <sports-card 
                .title="${player.title}" 
                .image="${player.image}" 
                .description="${player.description}"
                .badge="${player.badge}"
              ></sports-card>
            `)}
          </div>
        `;
      case 'roster':
        return html`
          <h2>Full 2025 Roster</h2>
          ${this.loading ? html`<p>Loading athletes...</p>` : ''}
          <div class="roster-grid">
            ${this.rosterData.map(player => html`
              <sports-card 
                .title="${player.title}" 
                .image="${player.image}" 
                .description="${player.description}"
                .badge="${player.badge}"
              ></sports-card>
            `)}
          </div>
        `;
      case 'schedule':
        return html`
          <h2>Upcoming Season Games</h2>
          <schedule-block .games="${this.scheduleData}"></schedule-block>
        `;
      case 'about':
        return html`
          <h2>About Frostbite Academy</h2>
          <p>We are a high-performance youth hockey organization dedicated to skill development.</p>
          <p><strong>Our Mission:</strong> To create not just great hockey players, but exceptional young leaders.</p>
        `;
      default:
        return html`<h2>Page Not Found</h2>`;
    }
  }
}

customElements.define('my-app', MyApp);