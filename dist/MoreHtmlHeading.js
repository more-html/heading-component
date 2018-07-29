(function() {
  const b = document.createElement("template");
  b.innerHTML = "\n  <style>\n    a.linkable {\n      position: absolute;\n      display: none;\n      background-color: white;\n      color: red;\n    }\n  </style>\n  <a class=\"linkable\">#</a>\n  <slot></slot>\n";

  class a extends HTMLElement {
    constructor() {super(), this.attachShadow({mode: "open"}).appendChild(b.content.cloneNode(!0))}

    connectedCallback() {
      const e = this.shadowRoot.querySelector(".linkable"), t = new URL(window.location);
      t.hash = this.getAttribute("slug"), e.setAttribute("href", t.toString());
      this.shadowRoot.addEventListener("pointerover", () => this.shadowRoot.querySelector(".linkable").style.display = "inline"), this.shadowRoot.addEventListener("pointerout", () => this.shadowRoot.querySelector(".linkable").style.display = "none")
    }
  }

  customElements.define("morehtml-heading", a), customElements.define("morehtml-h1", class extends a {}), customElements.define("morehtml-h2", class extends a {}), customElements.define("morehtml-h3", class extends a {}), customElements.define("morehtml-h4", class extends a {}), customElements.define("morehtml-h5", class extends a {}), customElements.define("morehtml-h6", class extends a {});
})();