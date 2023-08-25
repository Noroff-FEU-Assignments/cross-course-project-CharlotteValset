import { baseApiUrl, endpointApiUrl } from "./variables.js";
import { featuredProductEndpoint } from "./variables.js";
import { getData } from "./variables.js";
import { createMessage } from "./errorMessage.js";

const json = await getData(`${baseApiUrl}${endpointApiUrl}`);
const errorMessage = createMessage("error");

const sellingPointContainer = document.querySelector(".selling-point-card-image");
const featuredContainer = document.querySelector(".showcased-film-image");
const featuredProductContent = document.querySelector(".showcased-film-content-container");
const mostWatchedContainer = document.querySelector(".most-watched-container");
const newlyAddedContainer = document.querySelector(".newly-added-container");

async function fetchSellingpointImage() {
  try {
    sellingPointContainer.innerHTML = "";

    const sellingPointImageContainer = document.createElement("a");
    sellingPointImageContainer.href = `product.html?id=${json[9].id}`;
    sellingPointContainer.appendChild(sellingPointImageContainer);

    const sellingPointImage = document.createElement("img");
    sellingPointImage.setAttribute("alt", `Filmcover of ${json[9].name}`);
    sellingPointImage.src = json[9].images[0].src;
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
      filmCoverImage.setAttribute("alt", `Filmcover of ${json[i].name}`);
      filmCoverImage.classList = "filmcover-small";
      filmCoverImage.src = `${json[i].images[0].src}`;
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
      filmCoverImage.src = `${json[i].images[0].src}`;
      filmCoverContainer.appendChild(filmCoverImage);
    }
  } catch (error) {
    console.log("An error occured", error);
    newlyAddedContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}
fetchNewlyAddedFilms();

async function fetchFeaturedProduct() {
  try {
    const response = await fetch(featuredProductEndpoint);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching featured product:", error);
  }
}

const featuredProduct = await fetchFeaturedProduct();

async function displayFeaturedProductImage() {
  featuredContainer.innerHTML = "";

  if (featuredProduct) {
    try {
      const featuredFilmImageContainer = document.createElement("a");
      featuredFilmImageContainer.href = `product.html?id=${featuredProduct.id}`;
      featuredContainer.appendChild(featuredFilmImageContainer);

      const featuredProductImage = document.createElement("img");
      featuredProductImage.setAttribute("alt", `Filmcover of ${featuredProduct.name}`);
      featuredProductImage.classList = "filmcover-large";
      featuredProductImage.src = `${featuredProduct.images[0].src}`;
      featuredFilmImageContainer.appendChild(featuredProductImage);
    } catch (error) {
      console.log("An error occured", error);
      featuredContainer.innerHTML = errorMessage;
      throw new Error(error);
    }
  }
}

displayFeaturedProductImage();

async function displayFeaturedProductContent() {
  featuredProductContent.innerHTML = "";

  if (featuredProduct) {
    try {
      const productTitle = document.createElement("h2");
      productTitle.innerText = "FEATURED PRODUCT";
      productTitle.classList = "featured-product";
      featuredProductContent.appendChild(productTitle);

      const productName = document.createElement("h3");
      productName.innerText = featuredProduct.name;
      featuredProductContent.appendChild(productName);

      const productCategoryAndReleased = document.createElement("p");
      productCategoryAndReleased.classList = "film-category_home";
      productCategoryAndReleased.innerText =
        featuredProduct.categories[0].name + ", " + featuredProduct.attributes[0].options[0];
      featuredProductContent.appendChild(productCategoryAndReleased);

      const productDescription = document.createElement("p");
      productDescription.classList = "film-description";
      productDescription.innerText = featuredProduct.description;
      featuredProductContent.appendChild(productDescription);

      const modifiedDescription = productDescription.innerText.replace(/<p class="p1">|<\/p>/g, "");
      productDescription.innerText = modifiedDescription;
      featuredProductContent.appendChild(productDescription);

      const productPrice = document.createElement("p");
      productPrice.classList = "film-price_home";
      productPrice.innerText = "€ " + featuredProduct.price;
      featuredProductContent.appendChild(productPrice);

      const addToCartCta = document.createElement("a");
      addToCartCta.setAttribute("id", "button-change");
      addToCartCta.classList = "cta";
      addToCartCta.href = "checkout.html";
      addToCartCta.innerText = "Add to cart";
      featuredProductContent.appendChild(addToCartCta);
    } catch (error) {
      console.log("An error occurred", error);
      featuredProductContent.innerHTML = errorMessage;
      throw new Error(error);
    }
  }
}

displayFeaturedProductContent();

const mediaQuery = window.matchMedia("(max-width: 799px)");

function buttonChange(mediaQuery) {
  const ctaButton = document.getElementById("button-change");
  if (mediaQuery.matches) {
    ctaButton.innerText = "Read more";
    ctaButton.href = `product.html?id=${featuredProduct.id}`;
  } else {
    ctaButton.innerText = "Add to cart";
    ctaButton.href = "checkout.html";
  }
}

mediaQuery.addEventListener("change", buttonChange);
