// import { baseApiUrl, endpointApiUrl } from "./variables";

import { loader } from "./variables.js";

// Loader stop
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const productImageContainer = document.querySelector(".product-card-image");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// const url = baseApiUrl + endpointApiUrl + id;
// hvordan kan jeg bruke baseUrl og endpointUrl istedenfor den nye url?
const url = "https://api.noroff.dev/api/v1/square-eyes/" + id;

// Hvordan endre tittel i head til å matche productet?
// document.querySelector("title").textContent = "newTitle";

// function changeTitle() {
//   document.querySelector("title").textContent = `${json.id}`;
// }

// changeTitle();

// Product image

async function fetchproductImage() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const productImage = document.createElement("img");
    productImage.src = json.image;
    productImage.className = "filmcover-large";
    productImageContainer.appendChild(productImage);
  } catch (error) {
    console.log(error);
  }
}

fetchproductImage();

const productContent = document.querySelector(".product-content-container");

async function fetchProductContent() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const productTitle = document.createElement("h1");
    productTitle.className = "film-title-product-desktop";
    productTitle.innerText = json.title;
    productContent.appendChild(productTitle);

    const productCategoryAndReleased = document.createElement("p");
    productCategoryAndReleased.classList = "film-category";
    productCategoryAndReleased.innerText = json.genre + ", " + json.released;
    productContent.appendChild(productCategoryAndReleased);

    const productDescription = document.createElement("p");
    productDescription.innerText = json.description;
    productContent.appendChild(productDescription);

    const productPriceContainer = document.createElement("div");
    productPriceContainer.classList = "price-cta-container";
    productContent.appendChild(productPriceContainer);

    const productPrice = document.createElement("p");
    productPrice.classList = "price-product";
    productPrice.innerText = "€ " + json.price;
    productPriceContainer.appendChild(productPrice);

    const addToCartCta = document.createElement("a");
    addToCartCta.href = "checkout.html";
    addToCartCta.classList = "cta";
    addToCartCta.innerText = "Add to cart";
    productPriceContainer.appendChild(addToCartCta);
  } catch (error) {
    console.log(error);
  }
}

fetchProductContent();

// const loader = document.getElementsById("loader");

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });
