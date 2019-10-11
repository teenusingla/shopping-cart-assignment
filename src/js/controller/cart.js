import { getCarts, addToCarts, removeFromCarts } from "../model/Cart";
import * as cartView from "../view/cartView";
import { CONSTANS } from "../constants";
import { elements } from "../base";

const state = {};

export const controlCart = async () => {
  // Search for the Banners
  try {
    state.cartList = await getCarts();
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.BANNERS, err);
  }
  // render result on UI
  cartView.renderCart(state.cartList);
};

const addToCart = async productId => {
  // add item to cart
  try {
    const cart = await addToCarts(productId);
    // render result on UI
    elements.cartItem.textContent = cart.cart + " items";
    //render cart UI
    cartView.renderCart(cart.data);
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.ADDTOCART, err);
  }
};

const removeFromCart = async productId => {
  // remove item from cart
  try {
    const cart = await removeFromCarts(productId);
    // render result on UI
    elements.cartItem.textContent = cart.cart + " items";
    //render cart UI
    cartView.renderCart(cart.data);
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.REMOVEFROMCART, err);
  }
};

document.addEventListener("click", function(el) {
  const cartModal = elements.cartModal;
  if (el.target && el.target.className == elements.cartPlus) {
    addToCart(el.target.id);
  } else if (el.target && el.target.className == elements.cartMinus) {
    removeFromCart(el.target.id);
  } else if (
    el.target &&
    (el.target.className == elements.cartClose || event.target == cartModal)
  ) {
    cartModal.style.display = "none";
  }
});
