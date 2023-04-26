import { apiUrl } from "./index.js";

// Product image

const productImageContainer = document.querySelector(".product-card-image");

async function fetchproductImage() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  const productImage = document.createElement("img");
  productImage.src = json[8].image;
  productImage.className = "filmcover-large";
  productImageContainer.appendChild(productImage);
}

fetchproductImage();

const productContent = document.querySelector(".product-content-container");

async function fetchProductContent() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  // productContent.innerHTML = `<h1 class="film-title-product-mobile">${json.title}</h1>
  //                           <h1 class="film-title-product-desktop">${json.title}</h1>
  //                           <p class="film-category">${json.genre} ${json.released}</p>
  //                           <p>${json.description}</p>
  //                           <p>Rating: ${json.rating}</p>
  //                           <div class="price-cta-container">
  //                           <p class="price-product">€${json.price}</p>
  //                           <a href="checkout.html" class="cta">Add to cart</a>`;

  const productTitle = document.createElement("h1");
  productTitle.className = "film-title-product-desktop";
  productTitle.innerText = json[8].title;
  productContent.appendChild(productTitle);

  const productCategoryAndReleased = document.createElement("p");
  productCategoryAndReleased.classList = "film-category";
  productCategoryAndReleased.innerText = json[8].genre + ", " + json[8].released;
  productContent.appendChild(productCategoryAndReleased);

  const productDescription = document.createElement("p");
  productDescription.innerText = json[8].description;
  productContent.appendChild(productDescription);

  const productPriceContainer = document.createElement("div");
  productPriceContainer.classList = "price-cta-container";
  productContent.appendChild(productPriceContainer);

  const productPrice = document.createElement("p");
  productPrice.classList = "price-product";
  productPrice.innerText = "€ " + json[8].price;
  productPriceContainer.appendChild(productPrice);

  const addToCartCta = document.createElement("a");
  // addToCartCta.src = "././product.html";
  addToCartCta.classList = "cta";
  addToCartCta.innerText = "Add to cart";
  productPriceContainer.appendChild(addToCartCta);
}

fetchProductContent();
