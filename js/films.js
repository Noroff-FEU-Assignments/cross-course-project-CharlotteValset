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
      listFilmsContainer.innerHTML += `<a href="product.html?id=${result.id}" class="bold-on-hover">
                                         <img class="filmcover-small"
                                         style="background-image: url('${result.image}')"/>
                                          <p class="film-title">${result.title}</p>
                                       </a>`;
    });
  } catch (error) {
    console.log(error);
    listFilmsContainer.innerHTML = errorMessage;
  }
}
fetchFilmsList();
