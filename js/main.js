import { getAllCrews } from "./modules/app.js";
// import { plantillaPagination } from "./components/pagination.js";
import { getAllDragons } from "./modules/app.js";

let intervalId;
let allInfoContent = document.querySelector(".allinfo__content");
let menuCrew = document.querySelector("#crew");
let menuDragons = document.querySelector("#dragons");

document.addEventListener("DOMContentLoaded", async () => {
    await viewDragons();
});

let viewCrew = async e => {
    allInfoContent.innerHTML = await getAllCrews(); 
    let styles = document.querySelector("#styles");
    styles.href = 'css/styleCREW.css';
    let pagination = document.querySelector(".section__pagination");
    addEventListener("DOMContentLoaded", async e=>{
        pagination.innerHTML = await plantillaPagination();
    });
}

let viewDragons = async e => {
    let styles = document.querySelector("#styles");
    styles.href = 'css/style.css';
    allInfoContent.innerHTML = ""; 
    allInfoContent.innerHTML = await getAllDragons("0");
    repeatPagination(getAllDragons);
}

let repeatPagination = (functionView) => {
    let pagination = document.querySelectorAll(".pagination");
    pagination.forEach(element => {
        element.addEventListener('click', async (event) => {
            let clickedId = event.target.id;
            allInfoContent.innerHTML = ""; 
            allInfoContent.innerHTML = await functionView(clickedId-1);
        });
    });

    intervalId = setInterval(() => {
        pagination = document.querySelectorAll(".pagination");
        pagination.forEach(element => {
            element.addEventListener('click', async (event) => {
                let clickedId = event.target.id;
                allInfoContent.innerHTML = ""; 
                allInfoContent.innerHTML = await functionView(clickedId-1);
            });
        });
    }, 1000);
}

menuCrew.addEventListener("click", () => {
    viewCrew();
    clearInterval(intervalId);
});

menuCrew.addEventListener("click", viewCrew);
menuDragons.addEventListener("click", viewDragons);





