class Header {

  handlerOpenShoppingPage() {
    shoppingPage.render()
  }

  render(count) {
    const html = `
    <div class="header-container">
      <din class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
      🔥 ${count}
      </din>
    </div>
    `;
    ROOT_HEADER.innerHTML = html
  }

}

const headerPage = new Header();

