class GalleryCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
    1;
  }

  render() {
    this.innerHTML = `
        <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img src="${this._menu.strMealThumb}"
            class="w-full transition duration-300 ease-linear align-middle" />
          <a href="#!">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style="background-color: rgba(0, 0, 0, 0.3)">
              <div class="flex justify-start items-end h-full">
                <h5 class="text-lg font-bold text-white m-6">${this._menu.strMeal}</h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div
                class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style="background-color: rgba(253, 253, 253, 0.15)"></div>
            </div>
          </a>
        </div>
        `;
  }
}

customElements.define("gallery-card", GalleryCard);
