'use strict';
/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const InputRaceSearch = document.querySelector('.js-race-search');

//Objetos con cada gatito
const kittenData_1 = {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_2 = {
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Fiona",
    desc: "Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
const kittenData_3 = {
    image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    name: "Cielo",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
};
//const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

let kittenDataList = [];

function renderKitten(kittenData) {
    const liElement = document.createElement('li');
    liElement.classList.add('card');
    listElement.appendChild(liElement);
    const articleElement = document.createElement('article');
    liElement.appendChild(articleElement);

    const imageElement = document.createElement('img');
    imageElement.classList.add('card_image');
    imageElement.setAttribute("src", kittenData.image);
    imageElement.setAttribute("alt", "gatito");
    articleElement.appendChild(imageElement);

    const nameElement = document.createElement('h3');
    nameElement.classList.add('card_title');
    const nameText = document.createTextNode(kittenData.name);
    nameElement.appendChild(nameText);
    articleElement.appendChild(nameElement);

    const raceElement = document.createElement('h3');
    raceElement.classList.add('card_race');
    const raceText = document.createTextNode(kittenData.race);
    raceElement.appendChild(raceText);
    articleElement.appendChild(raceElement);

    const descElement = document.createElement('p');
    descElement.classList.add('card_description');
    const descText = document.createTextNode(kittenData.desc);
    descElement.appendChild(descText);
    articleElement.appendChild(descElement);

  };

//Funciones
/*function renderKitten(kittenData) {
    const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
    return kitten;
}*/
function renderKittenList(kittenDataList) {
    for (const kittenItem of kittenDataList) {
     renderKitten(kittenItem);
    }
}
//Mostrar/ocultar el formulario
function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}
function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}
//Adicionar nuevo gatito
/*function addNewKitten(event) {
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    if (valueDesc === "" && valuePhoto === "" && valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = "";
        }
    }
}*/
//Cancelar la búsqueda de un gatito
/*function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
}*/
//Filtrar por descripción esta funcion la modificamos con filter mas abajo en 2.12
// function filterKitten(event) {
//     event.preventDefault();
//     const descrSearchText = input_search_desc.value;
//     listElement.innerHTML = "";
//     for (const kittenItem of kittenDataList) {
//         if (kittenItem.desc.includes(descrSearchText)) {
//             listElement.innerHTML += renderKitten(kittenItem);
//         }
//     }
// }
//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);
//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);

//Aquí empezamos nosotras el segundo sprint :)
//Añadir un Michi y que se quede en el array
const inputRace = document.querySelector('.js-input-race');
function addNewKitten(event) {
    event.preventDefault();
    const newKittenDataObject = {
        image: inputPhoto.value,
        name: inputName.value,
        desc: inputDesc.value,
        race: inputRace.value,
      };
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    if (valueDesc === "" && valuePhoto === "" && valueName === "") {
        labelMesageError.innerHTML = "Debe rellenar todos los valores";
    } else {
        if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
            labelMesageError.innerHTML = "¡Mola! ¡Un nuevo gatito en Adalab!";
            kittenDataList.push(newKittenDataObject); //después d comprobación
        }
    }
 listElement.innerHTML += renderKitten(newKittenDataObject);
};
buttonAdd.addEventListener("click", addNewKitten);
//funciona!
//limpiar inputs y cancelar
function cancelNewKitten(event) {
    event.preventDefault();
    newFormElement.classList.add("collapsed");
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputRace.value = "";
    labelMesageError.innerHTML = "";
};
buttonCancelForm.addEventListener("click", cancelNewKitten);

//2.12
// FILTRAR

function filterKitten(ev) {
    ev.preventDefault();

    //Para juntar dos filtros se hace simplemente añadiendo un .filter después del último valor como en el ejemplo de abajo

    const kittenListFiltered = kittenDataList.filter (({race}) => race.includes(InputRaceSearch.value)).filter (({desc}) => desc.includes(input_search_desc.value));

    console.log(kittenListFiltered);

    renderKittenList(kittenListFiltered);
    // const kittenItem = kittenDataList.filter (({race}) => race===InputRaceSearch.value);
    // console.log(kittenItem);
    // renderKittenList(kittenItem);
    
    }

    searchButton.addEventListener("click", filterKitten);
   
   


    //EJERCICIO 2.13

const GITHUB_USER = 'NereidaRO';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;


//lo del fetch va a un else


//kittenDataList está en linea 37
//en renderKitten() hemos cambiado image por url porque es como viene en la API

//Día 2.14

const kittenListStored = JSON.parse(localStorage.getItem('kittensList')); //si hay gatos de otra sesión?

function askForCats () {
    if (kittenListStored){
        renderKittenList(kittenListStored)
    } else {
        fetch(SERVER_URL, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          }).then((response) => response.json()) //esto ya los convierte, no JSON.parse es necesario
          .then((data) => {
            let serverData = data.results;
            console.log(data);
             kittenDataList = serverData;

             renderKittenList(kittenDataList); 
             localStorage.setItem("kittensList", JSON.stringify(kittenDataList));
            });
    };
};

askForCats();

//Día 2.15
//Cambiar renderkittendata para que sea con DOM avanzado.

//no funciona, mañana preguntar
//ni el localStorage.setItem ni lo del DOM (linea 40)