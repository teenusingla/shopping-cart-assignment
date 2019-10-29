import { PRODUCT_SELECTOR } from "../js/base";
const lang = require("../i18/en.json");

const productsView = product => {
  const markup = `
  <li class="product__info__list--item">
    <h3 aria-label="${product.name}"> ${product.name}</h3>
    <img src=${product.imageURL} alt="name"/>
    <p aria-label="${product.description}"> ${product.description} </p>
    <div class="price__info">
      <span aria-label="Price: - ${product.price}">${lang.PRODUCTS.MRP} ${lang.PRODUCTS.RS} ${product.price}</span>
      <button class="btn buy-now" name="${product.id}">${lang.PRODUCTS.BUY}</button>
    </div>
    <div class="price__info--IPad">    
      <button class="btn btn-lg buy-now" name="${product.id}" aria-label="Price: - ${product.price}">${lang.PRODUCTS.BUY} @ ${lang.PRODUCTS.RS} ${product.price}</button>
    </div>
  </li>`;

  PRODUCT_SELECTOR.productList.insertAdjacentHTML("beforeend", markup);
};

const categoriesView = category => {
  const markup = `
  <li class="product__sidebar__list--item">
    <button id="${category.id}">${category.name}</button>
  </li>`;
  PRODUCT_SELECTOR.categoryList.insertAdjacentHTML("beforeend", markup);
};

const categoriesDropdownView = category => {
  const markup = `<option value="${category.id}" aria-label="${category.name}"> ${category.name} </option>`;
  PRODUCT_SELECTOR.categoryDropdown.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = products => {
  PRODUCT_SELECTOR.categoryList.innerHTML = "";
  products.forEach(categoriesView);
  products.forEach(categoriesDropdownView);
};

export const renderProducts = products => {
  PRODUCT_SELECTOR.productList.innerHTML = "";
  products.forEach(productsView);
};