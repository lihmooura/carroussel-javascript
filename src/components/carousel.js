class Product extends HTMLElement {
  connectedCallback() {
    var image = this.attributes.image.value
    var name = this.attributes.name.value
    var parcelamento = this.attributes.price.value
    var price = this.attributes.price.value
    
    this.innerHTML = `
    <div class="products">
    <div class="product">
    <img src="${image}" alt="erro">
    <h3>${name}</h3>
    <span style="font-weight:bold">R$ ${Number(price).toFixed(2)}</span>
    <span style="font-weight: 300;font-size: 15px;">até ${parcelamento[0]}x de R$${Number(parcelamento[1]).toFixed(2)} </span>
    <button id="add" class="btn-add"  price=${price}>
        COMPRAR
    </button>   
    </div>
    </div>
    `
  }
}

customElements.define('product-component', Product);
