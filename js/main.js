import { getAllCrews } from "./modules/app.js";
import { plantillaPagination } from "./components/pagination.js";
import { getAllDragons } from "./modules/app.js";

let allInfoContent = document.querySelector(".allinfo__content");
let menuCrew = document.querySelector(".article__crew");
let menuLaunche = document.querySelector(".article__launches");

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
menuLaunche.addEventListener("click", viewDragons);




