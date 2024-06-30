import { getAllCrews, getAllDragons, getAllRockets } from "./modules/app.js";

let intervalId;
let allInfoContent = document.querySelector(".allinfo__content");
let menuCrew = document.querySelector("#crew");
let menuDragons = document.querySelector("#dragons");
let menuRockets = document.querySelector("#rockets");


document.addEventListener("DOMContentLoaded", async () => {
    await viewRockets();
});

let viewCrew = async e => {
    let styles = document.querySelector("#styles");
    styles.href = 'css/styleCREW.css';
    allInfoContent.innerHTML = ""; 
    allInfoContent.innerHTML = await getAllCrews("0");
    repeatPagination(getAllCrews);
}

let viewDragons = async e => {
    let styles = document.querySelector("#styles");
    styles.href = 'css/style.css';
    allInfoContent.innerHTML = ""; 
    allInfoContent.innerHTML = await getAllDragons("0");
    repeatPagination(getAllDragons);
}

let viewRockets = async e => {
    let styles = document.querySelector("#styles");
    styles.href = 'css/style.css';
    allInfoContent.innerHTML = ""; 
    allInfoContent.innerHTML = await getAllRockets("0");
    repeatPagination(getAllRockets);
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
menuDragons.addEventListener("click", () => {
    viewDragons();
    clearInterval(intervalId);
});
menuRockets.addEventListener("click", () => {
    viewRockets();
    clearInterval(intervalId);
});





