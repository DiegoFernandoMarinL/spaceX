import { getAllCrews } from "./modules/app.js";

let allInfoContent = document.querySelector(".allinfo__content");
let menuCrew = document.querySelector(".article__crew");
let menuLaunche = document.querySelector(".article__launches");
let section = document.querySelector("#section");


let viewCrew = async e => {
    allInfoContent.innerHTML = await getAllCrews(); 
    let styles = document.querySelector("#styles");
    styles.href = 'css/styleCREW.css';
}
let viewLaunches = async e => {
    section.innerHTML = ""; 
    let styles = document.querySelector("#styles");
    styles.href = 'css/style.css';
}

menuCrew.addEventListener("click", viewCrew);
menuLaunche.addEventListener("click", viewLaunches);



console.log(await getAllCrews()); 
