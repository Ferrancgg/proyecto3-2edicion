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

const error = document.createElement("div");
const errorH2 = document.createElement("h2");

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

error.classList = "error-page";
errorH2.classList = "text";
errorH2.innerText = "No tengo resultados para esta palabra";

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

// main.appendChild(gallery);
App.appendChild(main);

error.appendChild(errorH2);

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
// formContainerSearch.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(inputSearch.value);
//   console.log(e);

//   const createImages = (images) => {
//     console.log("me estoy creando desde CreateIMAGES")
//     main.appendChild(gallery)
//     console.log("creando imagen");
//     if(images.length!==0){
//       main.appendChild(gallery)
//       for (let i = 1; i < 10; i++) {
//       const img = document.createElement("img");
//       img.classList = `img${i}`;
//       img.src = images[i].urls.thumb;
//       img.alt = images[i].alt_description;
//       gallery.appendChild(img);
//     }
//     }else{
//       console.log("no estoy teniendo resultados desde createelemnts")
//     }

//   };
//   const printErrorPage=()=>{
//     console.log("soy error desde componenete")
//     console.log(main)
//     console.log(error)
//     // createImages([])
//     main.appendChild(error)

//   }

//   const ApiKey = "vTA492gjqs13MBsTQKe-jb5KJTBaJWCHkCemi1MZPgk";
//   const endPoint = "https://api.unsplash.com/search/photos";

//   const getImages = async (query) => {
//     try {
//       let response = await fetch(
//         endPoint + "?query=" + query + "&client_id=" + ApiKey
//       );
//       let jsonResonse = await response.json();
//       let imagesList = await jsonResonse.results;

//       console.log(imagesList);
//       createImages(imagesList);
//     } catch {
//       createImages([])
//       console.log(error)
//       printErrorPage(error)
//       console.log("estoy siendo un error");
//       // const error = document.createElement("div");
//       // const h1 = document.createElement("h1");

//       // error.classList = "error";
//       // h1.classList = "h1";

//       // h1.innerText =
//       //   "Lo sentimos pero no tenemos imagenes para esta busqueda....";

//       // error.appendChild(h1);
//       // main.appendChild(error);
//     }
//   };
//   getImages(inputSearch.value);
//   // inputSearch.value=""
// });

const createImages = (images) => {
  console.log("me estoy creando desde CreateIMAGES");
  // main.appendChild(gallery);
  console.log("creando imagen");
  if (images.length !== 0) {
    main.appendChild(gallery);
    for (let i = 1; i < 10; i++) {
      const img = document.createElement("img");
      img.classList = `img${i}`;
      img.src = images[i].urls.thumb;
      img.alt = images[i].alt_description;
      gallery.appendChild(img);
    }
  } else {
    printErrorPage()
    console.log("no estoy teniendo resultados desde createelemnts");
  }
};

const printErrorPage = () => {
  console.log("soy error desde componenete");
  console.log(main);
  console.log(error);
  // createImages([])
  main.appendChild(error);
};

const getImages = async (query) => {
  try {
    let response = await fetch(
      endPoint + "?query=" + query + "&client_id=" + ApiKey
    );
    let jsonResonse = await response.json();
    let imagesList = await jsonResonse.results;

    console.log(imagesList);
    createImages(imagesList);
  } catch {
    createImages([]);
    console.log(error);
    printErrorPage(error);
    console.log("estoy siendo un error");
  }
};

const ApiKey = "vTA492gjqs13MBsTQKe-jb5KJTBaJWCHkCemi1MZPgk";
const endPoint = "https://api.unsplash.com/search/photos";

formContainerSearch.addEventListener("submit", (e) => {
  main.innerHTML=`<div></div>`
  e.preventDefault();
  console.log(inputSearch.value);
  console.log(e);
  console.log(main)
  console.log(gallery)

  getImages(inputSearch.value);
});
