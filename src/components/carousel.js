class carouselItem extends HTMLElement {
  connectedCallback() {
    var title = this.attributes.title.value
    var time = this.attributes.time.value
    
    this.innerHTML = `
    <div class="carousel-item">
    <img class="carousel-item-image" src="img/courseIcon.png " />
    <p class="carousel-text">${title}</p>
    <hr />
    <div class="card-footer">
        <img class="card-icon-clock" src="img/time-clock.png" />
        <p>${time}</p>
    </div>
  </div>
    `
  }
}

customElements.define('carousel-component', carouselItem);
