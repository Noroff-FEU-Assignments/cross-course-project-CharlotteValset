export const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";

const sellingPointContainer = document.querySelector(".selling-point-card-image1");

async function fetchFilmImage() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  const sellingPointImage1 = document.createElement("img");
  sellingPointImage1.src = json[0].image;
  sellingPointImage1.className = "filmcover-large";
  sellingPointContainer.appendChild(sellingPointImage1);
}

fetchFilmImage();

// Showcased Film image

const showcasedContainer = document.querySelector(".showcased-film-image");

async function fetchShowcasedImage() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  const showcasedFilmImage = document.createElement("img");
  showcasedFilmImage.src = json[8].image;
  showcasedFilmImage.className = "filmcover-large";
  showcasedContainer.appendChild(showcasedFilmImage);
}

fetchShowcasedImage();

// Showcased content text)

const showcasedProductContent = document.querySelector(".showcased-film-content-container");

async function fetchshowcasedContent() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  // showcasedProductContent.innerHTML = `<h2>${json.title}</h2>
  //                                       <p class="film-category_home">${json.genre} ${json.released}</p>
  //                                       <p class="film-description">${json.description}</p>
  //                                       <p class="film-price_home">€${json.price}</p>
  //                                       <a href="checkout.html" class="cta cta-add">Add to cart</a>
  //                                       <a href="product.html" class="cta cta-readmore">Read more</a>`;

  const productTitle = document.createElement("h2");
  productTitle.innerText = json[8].title;
  showcasedProductContent.appendChild(productTitle);

  const productCategoryAndReleased = document.createElement("p");
  productCategoryAndReleased.classList = "film-category_home";
  productCategoryAndReleased.innerText = json[8].genre + ", " + json[8].released;
  showcasedProductContent.appendChild(productCategoryAndReleased);

  const productDescription = document.createElement("p");
  productDescription.classList = "film-description";
  productDescription.innerText = json[8].description;
  showcasedProductContent.appendChild(productDescription);

  // const productPriceContainer = document.createElement("div");
  // productPriceContainer.classList = "price-cta-container";
  // showcasedProductContent.appendChild(productPriceContainer);

  const productPrice = document.createElement("p");
  productPrice.classList = "film-price_home";
  productPrice.innerText = "€ " + json[8].price;
  showcasedProductContent.appendChild(productPrice);

  const addToCartCta = document.createElement("a");
  // addToCartCta.src = "././product.html";
  addToCartCta.classList = "cta";
  addToCartCta.innerText = "Add to cart";
  showcasedProductContent.appendChild(addToCartCta);
}

fetchshowcasedContent();
