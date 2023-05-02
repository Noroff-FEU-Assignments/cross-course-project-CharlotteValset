import { baseApiUrl, endpointApiUrl } from "./variables.js";
// import { response } from "./variables.js";
// import { json } from "./variables.js";

const response = await fetch(baseApiUrl + endpointApiUrl);
const json = await response.json();

const sellingPointContainer = document.querySelector(".selling-point-card-image");
const showcasedContainer = document.querySelector(".showcased-film-image");
const showcasedProductContent = document.querySelector(".showcased-film-content-container");
const mostWatchedContainer = document.querySelector(".most-watched-container");
const newlyAddedContainer = document.querySelector(".newly-added-container");

// Sellingpoint Film image

async function fetchSellingpointImage() {
  try {
    sellingPointContainer.innerHTML = "";

    const sellingPointImageContainer = document.createElement("a");
    sellingPointImageContainer.href = `product.html?id=${json[0].id}`;
    sellingPointContainer.appendChild(sellingPointImageContainer);

    const sellingPointImage = document.createElement("img");
    sellingPointImage.src = json[0].image;
    sellingPointImage.className = "filmcover-large";
    sellingPointImageContainer.appendChild(sellingPointImage);
  } catch (error) {
    console.log("error", error);
  }
}

fetchSellingpointImage();

// Showcased Film image

async function fetchShowcasedImage() {
  try {
    showcasedContainer.innerHTML = "";

    const showcasedFilmImageContainer = document.createElement("a");
    showcasedFilmImageContainer.href = `product.html?id=${json[8].id}`;
    showcasedContainer.appendChild(showcasedFilmImageContainer);

    const showcasedFilmImage = document.createElement("img");
    showcasedFilmImage.src = json[8].image;
    showcasedFilmImage.className = "filmcover-large";
    showcasedFilmImageContainer.appendChild(showcasedFilmImage);
  } catch (error) {
    console.log(error);
  }
}

fetchShowcasedImage();

// Showcased content text)

async function fetchshowcasedContent() {
  try {
    //                                       <a href="checkout.html" class="cta cta-add">Add to cart</a>
    //                                       <a href="product.html" class="cta cta-readmore">Read more</a>`;
    // --- hvordan få til at knappen endrer seg fra "add to cart" til "read more" når man er i mobil modus? vanskelig å vite hvordan @media funker med js
    // Du kan bruke window.innerWidth for å sjekke resoluton value og justere deretter, eller du kan toggle classes. Kan og bruke Media Queries til å endre "content" property i CSS.
    // ---
    showcasedProductContent.innerHTML = "";

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

    const productPrice = document.createElement("p");
    productPrice.classList = "film-price_home";
    productPrice.innerText = "€ " + json[8].price;
    showcasedProductContent.appendChild(productPrice);

    const addToCartCta = document.createElement("a");
    addToCartCta.classList = "cta";
    addToCartCta.href = "checkout.html";
    addToCartCta.innerText = "Add to cart";
    showcasedProductContent.appendChild(addToCartCta);
  } catch (error) {
    console.log(error);
  }
}

fetchshowcasedContent();

// Most watched films

async function fetchMostWatchedFilms() {
  try {
    mostWatchedContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      if (i === 4) {
        break;
      }

      const filmCoverContainer = document.createElement("a");
      filmCoverContainer.href = `product.html?id=${json[i].id}`;
      filmCoverContainer.classList = "filmcover-hover";
      mostWatchedContainer.appendChild(filmCoverContainer);

      const filmCoverImage = document.createElement("img");
      filmCoverImage.classList = "filmcover-small";
      filmCoverImage.src = `${json[i].image}`;
      filmCoverContainer.appendChild(filmCoverImage);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchMostWatchedFilms();

// Newly added films

async function fetchNewlyAddedFilms() {
  try {
    newlyAddedContainer.innerHTML = "";

    for (let i = 4; i < json.length; i++) {
      if (i === 8) {
        break;
      }

      const filmCoverContainer = document.createElement("a");
      filmCoverContainer.href = `product.html?id=${json[i].id}`;
      filmCoverContainer.classList = "filmcover-hover";
      newlyAddedContainer.appendChild(filmCoverContainer);

      const filmCoverImage = document.createElement("img");
      filmCoverImage.classList = "filmcover-small";
      filmCoverImage.src = `${json[i].image}`;
      filmCoverContainer.appendChild(filmCoverImage);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchNewlyAddedFilms();
