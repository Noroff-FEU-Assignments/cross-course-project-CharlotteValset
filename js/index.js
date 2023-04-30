import { baseApiUrl, endpointApiUrl } from "./variables.js";
import { loader } from "./variables.js";
// import { response } from "./variables.js";
// import { json } from "./variables.js";

// Loader stop
//skjønner ikke helt hvordan denne funker og hvor den bør stå?
// Plutselig så dukker den opp når alt innhold er lastet opp på siden og vil ikke gå vekk..

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// prøvde å flytte disse to til variables men da kom loader opp på siden sammen med innhold
const response = await fetch(baseApiUrl + endpointApiUrl);
const json = await response.json();

// hvor bør disse stå? Her? egen js-fil?
const sellingPointContainer = document.querySelector(".selling-point-card-image");
const showcasedContainer = document.querySelector(".showcased-film-image");
const showcasedProductContent = document.querySelector(".showcased-film-content-container");
const mostWatchedContainer = document.querySelector(".most-watched-container");
const newlyAddedContainer = document.querySelector(".newly-added-container");

// Sellingpoint Film image

async function fetchSellingpointImage() {
  try {
    const sellingPointImageContainer = document.createElement("a");
    sellingPointImageContainer.href = `product.html?id=${json[0].id}`;
    sellingPointContainer.appendChild(sellingPointImageContainer);

    const sellingPointImage = document.createElement("img");
    sellingPointImage.src = json[0].image;
    sellingPointImage.className = "filmcover-large";
    sellingPointImageContainer.appendChild(sellingPointImage);
  } catch (error) {
    //hvorfor funker ikke clg-error?
    console.log("error", error);
  }
}

fetchSellingpointImage();

// Showcased Film image

async function fetchShowcasedImage() {
  try {
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
    // hvordan få til at knappen endrer seg fra "add to cart" til "read more" når man er i mobil modus? vanskelig å vite hvordan @media funker med js
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
// vet ikke hva jeg har gjort her men det funka XD 4 nye filmer dukket opp, men finnes nok en bedre måte å gjøre det på;)
async function fetchNewlyAddedFilms() {
  try {
    for (let i = 2; i < json.length; i++) {
      if (i === 6) {
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
