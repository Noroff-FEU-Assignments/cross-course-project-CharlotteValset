import { baseApiUrl, endpointApiUrl } from "./variables.js";
import { getData } from "./variables.js";
import { createMessage } from "./errorMessage.js";

const json = await getData(`${baseApiUrl}${endpointApiUrl}`);
const errorMessage = createMessage("error");

const sellingPointContainer = document.querySelector(".selling-point-card-image");
const showcasedContainer = document.querySelector(".showcased-film-image");
const showcasedProductContent = document.querySelector(".showcased-film-content-container");
const mostWatchedContainer = document.querySelector(".most-watched-container");
const newlyAddedContainer = document.querySelector(".newly-added-container");

async function fetchSellingpointImage() {
  try {
    sellingPointContainer.innerHTML = "";

    const sellingPointImageContainer = document.createElement("a");
    sellingPointImageContainer.href = `product.html?id=${json[0].id}`;
    sellingPointContainer.appendChild(sellingPointImageContainer);

    const sellingPointImage = document.createElement("img");
    sellingPointImage.setAttribute("alt", `Filmcover of ${json[0].title}`);
    sellingPointImage.src = json[0].image;
    sellingPointImage.className = "filmcover-large";
    sellingPointImageContainer.appendChild(sellingPointImage);
  } catch (error) {
    console.log("An error occured", error);
    sellingPointContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}

fetchSellingpointImage();

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
      filmCoverImage.setAttribute("alt", `Filmcover of ${json[i].title}`);
      filmCoverImage.classList = "filmcover-small";
      filmCoverImage.src = `${json[i].image}`;
      filmCoverContainer.appendChild(filmCoverImage);
    }
  } catch (error) {
    console.log("An error occured", error);
    mostWatchedContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}
fetchMostWatchedFilms();

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
      filmCoverImage.setAttribute("alt", `Filmcover of ${json[i].title}`);
      filmCoverImage.classList = "filmcover-small";
      filmCoverImage.src = `${json[i].image}`;
      filmCoverContainer.appendChild(filmCoverImage);
    }
  } catch (error) {
    console.log("An error occured", error);
    newlyAddedContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}
fetchNewlyAddedFilms();

async function fetchShowcasedImage() {
  try {
    showcasedContainer.innerHTML = "";

    const showcasedFilmImageContainer = document.createElement("a");
    showcasedFilmImageContainer.href = `product.html?id=${json[8].id}`;
    showcasedContainer.appendChild(showcasedFilmImageContainer);

    const showcasedFilmImage = document.createElement("img");
    showcasedFilmImage.setAttribute("alt", `Filmcover of ${json[8].title}`);
    showcasedFilmImage.src = json[8].image;
    showcasedFilmImage.className = "filmcover-large";
    showcasedFilmImageContainer.appendChild(showcasedFilmImage);
  } catch (error) {
    console.log("An error occured", error);
    showcasedContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}

fetchShowcasedImage();

async function fetchshowcasedContent() {
  try {
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
    addToCartCta.setAttribute("id", "button-change");
    addToCartCta.classList = "cta";
    addToCartCta.href = "checkout.html";
    addToCartCta.innerText = "Add to cart";
    showcasedProductContent.appendChild(addToCartCta);
  } catch (error) {
    console.log("An error occured", error);
    showcasedProductContent.innerHTML = errorMessage;
    throw new Error(error);
  }
}

fetchshowcasedContent();

const mediaQuery = window.matchMedia("(max-width: 799px)");
const ctaButton = document.getElementById("button-change");

function buttonChange(mediaQuery) {
  if (mediaQuery.matches) {
    ctaButton.innerText = "Read more";
    ctaButton.href = `product.html?id=${json[8].id}`;
  } else {
    ctaButton.innerText = "Add to cart";
    ctaButton.href = "checkout.html";
  }
}

mediaQuery.addListener(buttonChange);
buttonChange(mediaQuery);
