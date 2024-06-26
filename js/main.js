import { getAllCrews } from "./modules/app.js";

let imagen = document.querySelector(".info__Crews");

addEventListener("DOMContentLoaded", async e => { 
    imagen.innerHTML = await getAllCrews(); 
});

console.log(await getAllCrews()); 
