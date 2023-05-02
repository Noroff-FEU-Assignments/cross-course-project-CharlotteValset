import { baseApiUrl } from "./variables.js";
import { endpointApiUrl } from "./variables.js";

const listFilmsContainer = document.querySelector(".list-films-row");

async function fetchFilmsList() {
  try {
    listFilmsContainer.innerHTML = "";

    const response = await fetch(baseApiUrl + endpointApiUrl);
    const json = await response.json();

    json.forEach(function (result) {
      listFilmsContainer.innerHTML += `<a href="product.html?id=${result.id}" class="bold-on-hover">
                                         <img class="filmcover-small"
                                         style="background-image: url('${result.image}')"/>
                                          <p class="film-title">${result.title}</p>
                                       </a>`;
    });
  } catch (error) {
    console.log(error);
    listFilmsContainer.innerHTML = message("error");
  }
}
fetchFilmsList();
