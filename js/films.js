import { apiUrl } from "./index.js";

const listFilmsContainer = document.querySelector(".list-films-row");

// const filmsUrl = "https://api.noroff.dev/api/v1/square-eyes";

async function fetchFilmsList() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json);

  json.forEach(function (result) {
    // const listOfFilms = document.createElement("div");
    // listOfFilms.background += "${json.image}";
    // listOfFilms.className = "filmcover-small bold-on-hover";
    // listFilmsContainer.appendChild(listOfFilms);

    listFilmsContainer.innerHTML += `<a href="product.html" class="bold-on-hover">
                                       <img class="filmcover-small"
                                       style="background-image: url('${result.image}')"/>
                                        <p class="film-title">${result.title}</p>
                                     </a>`;
  });
}

fetchFilmsList();
