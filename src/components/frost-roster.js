import { LitElement, html, css } from 'lit';

export class SportsCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      badge: { type: String },
      isLiked: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: var(--ddd-border-card);
        border-radius: var(--ddd-radius);
        overflow: hidden;
        background-color: var(--ddd-white);
        transition: transform 0.2s, box-shadow 0.2s;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      :host(:hover) {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        background-color: var(--ddd-gray);
      }

      .card-content {
        padding: var(--ddd-spacing-md);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      h3 {
        margin: 0 0 var(--ddd-spacing-xs) 0;
        font-family: var(--ddd-font-display);
        color: var(--ddd-primary);
        font-size: 1.5rem;
      }

      .badge {
        display: inline-block;
        background-color: var(--ddd-accent);
        color: var(--ddd-white);
        font-size: 0.8rem;
        padding: 2px 8px;
        border-radius: 4px;
        margin-bottom: var(--ddd-spacing-sm);
        align-self: flex-start;
      }

      p {
        color: var(--ddd-dark-gray);
        font-size: 0.95rem;
        line-height: 1.4;
        flex-grow: 1;
      }

      .actions {
        display: flex;
        justify-content: space-between;
        margin-top: var(--ddd-spacing-md);
        border-top: 1px solid var(--ddd-gray);
        padding-top: var(--ddd-spacing-sm);
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--ddd-secondary);
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px;
        border-radius: 4px;
        transition: background 0.2s;
      }

      button:hover {
        background-color: var(--ddd-ice);
      }

      .like-btn.liked {
        color: var(--ddd-alert);
      }
    `;
  }

  constructor() {
    super();
    this.isLiked = false;
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  shareCard() {
    navigator.clipboard.writeText(`${this.title} - ${this.description}`);
    alert("Player info copied to clipboard!");
  }

  render() {
    return html`
      <img class="card-image" src="${this.image}" alt="${this.title}" loading="lazy" />
      <div class="card-content">
        <span class="badge">${this.badge}</span>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <div class="actions">
          <button class="like-btn ${this.isLiked ? 'liked' : ''}" @click="${this.toggleLike}">
            ${this.isLiked ? '♥ Liked' : '♡ Like'}
          </button>
          <button @click="${this.shareCard}">➦ Share</button>
        </div>
      </div>
    `;
  }
}

customElements.define('sports-card', SportsCard);
