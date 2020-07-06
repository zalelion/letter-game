import { LitElement, html, css } from 'lit-element';
import anime from 'animejs';
import { randomLetter } from './randomLetter.js';

export class LetterGame extends LitElement {
  static get properties() {
    return {
      letter: { type: String },
    };
  }

  constructor() {
    super();
    this.letter = randomLetter();
    this._handle = this._handle.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keyup', this._handle);
  }

  _handle({ key }) {
    if (key.length === 1) {
      if (key === this.letter) {
        this.letter = randomLetter();
        const iconDom = this.shadowRoot.querySelector('ion-icon');
        anime
        .timeline({
          targets: [iconDom],
        })
        .add({
          opacity: 1,
          duration: 200,
        })
        .add({
          opacity: 0,
          duration: 5000,
        })

      } else {
        const letterDom = this.shadowRoot.querySelector('.letter');
        anime
          .timeline({
            targets: [letterDom],
          })
          .add({
            translateX: 10,
            duration: 200,
          })
          .add({
            translateX: -10,
            duration: 200,
          })
          .add({
            translateX: 0,
            duration: 200,
          });
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keyup', this._handle);
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
      }
      .game {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .letter {
        line-height: 0;
        padding: 20px 0;
        font-size: 200px;
        text-align: center;
      }
      ion-icon {
        font-size: 200px;
        color: pink;
        background-color:yellow;
        opacity:0;
      }
    `;
  }

  render() {
    return html`<div class="game">
      <h1 class="letter">${this.letter}</h1>
      <ion-icon name="happy-outline"></ion-icon>
    </div>`;
  }
}
