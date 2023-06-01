// import { baseApiUrl, endpointApiUrl } from "./variables.js";
// import { getData } from "./variables.js";
// import { createMessage } from "./errorMessage.js";

// const addedToCart = document.querySelector(".added-to-cart");
// const errorMessage = createMessage("error");

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const json = await getData(`${baseApiUrl}${endpointApiUrl}/${id}`);

// json.forEach((product) => {
//   const itemsInCart = document.createElement("div");
//   itemsInCart.classList = "items-in-cart";
//   addedToCart.appendChild(itemsInCart);

//   const productLink = document.createElement("a");
//   productLink.href = `product.html?id=${product.id}`;
//   itemsInCart.appendChild(productLink);

//   const cartFilmsImage = document.createElement("img");
//   cartFilmsImage.setAttribute("alt", `Filmcover of ${product.title}`);
//   cartFilmsImage.src = product.image;
//   cartFilmsImage.className = "filmcover-cart";
//   productLink.appendChild(cartFilmsImage);

//   const itemsInCartText = document.createElement("div");
//   itemsInCartText.classList = "items-cart-text";
//   itemsInCart.appendChild(itemsInCartText);

//   const addedToCartTitle = document.createElement("h2");
//   addedToCartTitle.classList = "one-line-heading";
//   addedToCartTitle.innerText = product.title;
//   itemsInCartText.appendChild(addedToCartTitle);

//   const addedToCartPrice = document.createElement("p");
//   addedToCartPrice.innerText = "€ " + product.price;
//   addedToCartPrice.classList = "price_cart";
//   itemsInCartText.appendChild(addedToCartPrice);

//   const removeFromCartButton = document.createElement("button");
//   removeFromCartButton.innerText = "Remove from cart";
//   removeFromCartButton.classList = "remove-button";
//   itemsInCartText.appendChild(removeFromCartButton);

//   const deleteIcon = document.createElement("i");
//   icon.setAttribute("class", "fa-regular fa-circle-xmark");
//   removeFromCartButton.appendChild(deleteIcon);
// });

// const addedToCartButton = document.querySelectorAll(".add-to-cart");

// addedToCartButton.forEach((button) => {
//   addedToCartButton.addEventListener("click", handleClick);
// });

// function handleClick() {
//   console.log(handleClick);
// }

// async function fetchAddedToCartProduct() {
//   try {
//     addedToCart.innerHTML = "";

//     const itemsInCart = document.createElement("div");
//     itemsInCart.classList = "items-in-cart";
//     addedToCart.appendChild(itemsInCart);

//     const productLink = document.createElement("a");
//     productLink.href = `product.html?id=${result.id}`;
//     itemsInCart.appendChild(productLink);

//     const cartFilmsImage = document.createElement("img");
//     cartFilmsImage.setAttribute("alt", `Filmcover of ${result.title}`);
//     cartFilmsImage.src = result.image;
//     cartFilmsImage.className = "filmcover-cart";
//     productLink.appendChild(cartFilmsImage);

//     const itemsInCartText = document.createElement("div");
//     itemsInCartText.classList = "items-cart-text";
//     itemsInCart.appendChild(itemsInCartText);

//     const addedToCartTitle = document.createElement("h2");
//     addedToCartTitle.classList = "one-line-heading";
//     addedToCartTitle.innerText = json.title;
//     itemsInCartText.appendChild(addedToCartTitle);

//     const addedToCartPrice = document.createElement("p");
//     addedToCartPrice.innerText = "€ " + json.price;
//     addedToCartPrice.classList = "price_cart";
//     itemsInCartText.appendChild(addedToCartPrice);

//     const removeFromCartButton = document.createElement("button");
//     removeFromCartButton.innerText = "Remove from cart";
//     removeFromCartButton.classList = "remove-button";
//     itemsInCartText.appendChild(removeFromCartButton);

//     const deleteIcon = document.createElement("i");
//     icon.setAttribute("class", "fa-regular fa-circle-xmark");
//     removeFromCartButton.appendChild(deleteIcon);
//   } catch (error) {
//     console.log("An error occured", error);
//     productImageContainer.innerHTML = errorMessage;
//     throw new Error(error);
//   }
// }

// fetchAddedToCartProduct();
