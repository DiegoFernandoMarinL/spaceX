import { getAllCrews } from "./modules/app.js";
// import { plantillaPagination } from "./components/pagination.js";
import { getAllDragons } from "./modules/app.js";

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
    allInfoContent.innerHTML = ""; 
    allInfoContent.innerHTML = await getAllDragons();
    let styles = document.querySelector("#styles");
    styles.href = 'css/style.css';
}

menuCrew.addEventListener("click", viewCrew);
menuDragons.addEventListener("click", viewDragons);




