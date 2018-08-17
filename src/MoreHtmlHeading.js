const template = document.createElement('template');
template.innerHTML = `
  <style>
    a.linkable {
      visibility: hidden;
      text-decoration: none;
    }
    a.linkable.show {
      visibility: visible;
      text-decoration: underline;
    }
  </style>
  <a class="linkable">#</a>
  <slot></slot>
`;

class MoreHtmlHeading extends HTMLHeadingElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const linkEl = this.shadowRoot.querySelector('.linkable');
    linkEl.setAttribute('href', `#${this.getAttribute('hash')}`);
    this._makeHashAsLinkTargetWork()
   
    const showLinkable = () => this.shadowRoot.querySelector('.linkable').classList.add('show');
    const hideLinkable = () => this.shadowRoot.querySelector('.linkable').classList.remove('show');
    if (this.hasAttribute('show-link')) {
      showLinkable();
    } else {
      this.addEventListener('pointerover', showLinkable);
      this.addEventListener('pointerout', hideLinkable);
    }	
  }
  _makeHashAsLinkTargetWork() {
    this.setAttribute('id', this.getAttribute('hash'));
  }
}

customElements.define('morehtml-h1', class extends MoreHtmlHeading {}, {extends: "h1"});
customElements.define('morehtml-h2', class extends MoreHtmlHeading {}, {extends: "h2"});
customElements.define('morehtml-h3', class extends MoreHtmlHeading {}, {extends: "h3"});
customElements.define('morehtml-h4', class extends MoreHtmlHeading {}, {extends: "h4"});
customElements.define('morehtml-h5', class extends MoreHtmlHeading {}, {extends: "h5"});
customElements.define('morehtml-h6', class extends MoreHtmlHeading {}, {extends: "h6"});
