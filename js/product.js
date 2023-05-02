import { baseApiUrl, endpointApiUrl } from "./variables.js";

const productImageContainer = document.querySelector(".product-card-image");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `${baseApiUrl}${endpointApiUrl}/${id}`;

// Product image

async function fetchproductImage() {
  try {
    productImageContainer.innerHTML = "";

    const response = await fetch(url);
    const json = await response.json();

    const productImage = document.createElement("img");
    productImage.src = json.image;
    productImage.className = "filmcover-large";
    productImageContainer.appendChild(productImage);
  } catch (error) {
    console.log("error");
  }
}

fetchproductImage();

const productContent = document.querySelector(".product-content-container");

async function fetchProductContent() {
  try {
    productContent.innerHTML = "";

    const response = await fetch(url);
    const json = await response.json();

    document.title = json.title;

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
