import { getCategories } from "../../model/Category";
import { getBanners } from "../../model/Banners";
import * as homeView from "../../view/homeView";
import { CONSTANTS } from "../../constants";

const state = {};

const controlBanners = async () => {
  // Search for the Banners
  try {
    state.bannersList = await getBanners();
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.BANNERS, err);
  }
  // render result on UI
  homeView.renderBanners(state.bannersList);
};

const controlCategories = async () => {
  // Search for the Categories
  try {
    state.categoryList = await getCategories();
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.CATEGORIES, err);
  }
  // render result on UI
  homeView.renderCategories(state.categoryList);
};

const controlDots = () => {
  const bannersLen = state.bannersList.length;
  state.dotArray = [...Array(bannersLen).keys()];
  // render result on UI
  homeView.renderDots(state.dotArray);
};

if (CONSTANTS.currentURL == CONSTANTS.PAGE_URL.HOME) {
  controlBanners();
  controlCategories();

  setTimeout(function() {
    controlDots();
  }, 100);
}