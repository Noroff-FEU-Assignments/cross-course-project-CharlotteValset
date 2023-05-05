import { baseApiUrl } from "./variables.js";
import { endpointApiUrl } from "./variables.js";
import { getData } from "./variables.js";
import { createMessage } from "./errorMessage.js";

const listFilmsContainer = document.querySelector(".list-films-row");
const errorMessage = createMessage("error");

async function fetchFilmsList() {
  try {
    listFilmsContainer.innerHTML = "";

    const json = await getData(`${baseApiUrl}${endpointApiUrl}`);

    json.forEach(function (result) {
      const listOfFilms = document.createElement("a");
      listOfFilms.href = `product.html?id=${result.id}`;
      listOfFilms.className = "bold-on-hover";
      listFilmsContainer.appendChild(listOfFilms);

      const listOfFilmsImage = document.createElement("img");
      listOfFilmsImage.setAttribute("alt", `Filmcover of ${result.title}`);
      listOfFilmsImage.src = result.image;
      listOfFilmsImage.className = "filmcover-small";
      listOfFilms.appendChild(listOfFilmsImage);

      const listOfFilmsTitle = document.createElement("p");
      listOfFilmsTitle.innerText = result.title;
      listOfFilmsTitle.className = "film-title";
      listOfFilms.appendChild(listOfFilmsTitle);
    });
  } catch (error) {
    console.log(error);
    listFilmsContainer.innerHTML = errorMessage;
    throw new Error(error);
  }
}
fetchFilmsList();
