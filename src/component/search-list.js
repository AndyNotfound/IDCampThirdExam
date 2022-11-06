import "./gallery-card.js";

class SearchResult extends HTMLElement {
  connectedCallback() {
    this.getAttribute("class") || null;
  }

  set results(results) {
    this._results = results;
    this.render();
  }

  render() {
    this._results.forEach((result) => {
      const resultElement = document.createElement("gallery-card");
      resultElement.menu = result;
      this.appendChild(resultElement);
    });
  }
}

customElements.define("search-result", SearchResult);
