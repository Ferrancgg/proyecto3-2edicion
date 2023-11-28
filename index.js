import { liInfos } from "./data/data";
import "./style.css";
const App = document.querySelector("#app");

const header = document.createElement("header");
const divLogo = document.createElement("div");
const logo = document.createElement("img");

const nav = document.createElement("nav");
const ul = document.createElement("ul");

const divContainerInfo = document.createElement("div");
const ulInfo = document.createElement("ul");

const formContainerSearch = document.createElement("form");

const divLupaContainer = document.createElement("div");
const lupaImg = document.createElement("img");
const inputSearch = document.createElement("input");

const main = document.createElement("main");
const gallery = document.createElement("div");

/////////

header.classList = "header";
divLogo.classList = "div-logo";
logo.classList = "logo";
logo.src =
  "https://res.cloudinary.com/di49fnkc8/image/upload/v1700751940/letra-p_uzdvjt.png";
logo.alt = "logo";

nav.classList = "nav";
ul.classList = "ul";

divContainerInfo.classList = "container-info";
ulInfo.classList = "ul-info";
ulInfo.classList += " flex";

formContainerSearch.classList = "container-search";
formContainerSearch.id = "form";
divLupaContainer.classList = "lupa-container";
lupaImg.classList = "lupa-icono";
lupaImg.src =
  "https://res.cloudinary.com/di49fnkc8/image/upload/v1701167119/loupe_tjydrf.png";
lupaImg.alt = "lupa icono";
inputSearch.classList = "input-search";
inputSearch.id = "input-search";
inputSearch.placeholder = "escribe aqui.....";

main.classList = "main";

gallery.classList = "gallery";

////////

App.appendChild(header);
header.appendChild(divLogo);
divLogo.appendChild(logo);
header.appendChild(nav);

nav.appendChild(ul);

header.appendChild(formContainerSearch);
formContainerSearch.appendChild(divLupaContainer);
divLupaContainer.appendChild(lupaImg);
formContainerSearch.appendChild(inputSearch);

divContainerInfo.appendChild(ulInfo);
header.appendChild(divContainerInfo);

main.appendChild(gallery);
App.appendChild(main);

// LOGICA///

for (let i = 0; i < 2; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  ul.appendChild(li);
  li.appendChild(a);
  li.classList = "li";
  a.classList = "a";
  a.innerText = `texto ${i}`;
}
/////

for (const info of liInfos) {
  const liElement = document.createElement("li");
  liElement.classList = "li-element";

  const liImg = document.createElement("img");
  liImg.classList = "li-img";
  liImg.src = info.img;
  liImg.alt = info.text;

  liElement.appendChild(liImg);

  ulInfo.appendChild(liElement);
}

//   aplicacamos la logica para buscar la palabra y mostrarla en el main
formContainerSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputSearch.value);
  console.log(e);

  //////////

  const createImages = (images) => {
    console.log("creando imagen");
    for (let i = 1; i < 10; i++) {
      const img = document.createElement("img");
      img.classList = `img${i}`;
      img.src = images[i].urls.thumb;
      img.alt = images[i].alt_description;
      gallery.appendChild(img);
    }
  };

  const ApiKey = "vTA492gjqs13MBsTQKe-jb5KJTBaJWCHkCemi1MZPgk";
  const endPoint = "https://api.unsplash.com/search/photos";

  const getImages = async (query) => {
    let response = await fetch(
      endPoint + "?query=" + query + "&client_id=" + ApiKey
    );
    let jsonResonse = await response.json();
    let imagesList = await jsonResonse.results;

    console.log(imagesList);
    createImages(imagesList);
  };
  getImages(inputSearch.value);
  inputSearch.value=""

});
