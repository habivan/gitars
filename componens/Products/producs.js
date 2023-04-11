class Products {
  constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.lablelAdd = 'Добавить в корзину';
    this.lablelRemuve = 'Удалить из корзины';
  }

  handleSetLocationStoragr(element, id) {
    const result =  localStorageUtil.putProducts(id);
  
    if (result.pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.lablelRemuve;
    }else {
      element.classList.remove(this.classNameActive);
      element.innerText = this.lablelAdd;
    }

    headerPage.render(result.products.length);
  }

  render(){
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    CATALOG.forEach(({id,name,price,img}) => {
      let activClass = '';
      let activText = '';

      if (productsStore.indexOf(id) === -1) {
        activText =  this.lablelAdd;
      }else{ 
        activText = this.lablelRemuve;
        activClass = ' '+this.classNameActive;
      };

      htmlCatalog += `
      <li class = "products-element">
        <span class = "products-element__name">${name}</span>
        <img class = "products-element__img" src="${img}"/>
        <span class = "products-element__price">⚡️${price.toLocaleString()} рублей</span>
        <button class = "products-element__btn ${activClass}" onclick="productsPage.handleSetLocationStoragr(this, '${id}')">
        ${activText}
        </button>
      </li>
      `;
    });

    const html = `
    <ul class = "products-container">
      ${htmlCatalog}
    </ul>
    `
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
