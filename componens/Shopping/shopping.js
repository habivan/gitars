class Shopping {

  habdlCliar(){
    ROOT_SOPPING.innerHTML = '';
  }


  render() {

    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({id,name,price}) => {
        if (productsStore.indexOf(id) !== -1){
          htmlCatalog +=`
          <tr>
            <td class="shopping-element__name">⚡️ ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()} рублей</td>
          </tr>
          `;
          sumCatalog += price;
        }
    });

    const html = `
    <div class="shopping-container">
      <div class="sohopping__close" onclick="shoppingPage.habdlCliar();"></div>
      <table>
        ${htmlCatalog}
        <tr>
          <td class="shopping-element__name">💳 Сумма</td>
          <td class="shopping-element__price">${sumCatalog.toLocaleString()} рублей</td>
      </tr>
      </table>
    </div>
    `;
    ROOT_SOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping()