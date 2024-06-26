import { getAllCrews } from "./modules/app.js";

let infoCrews = document.querySelector(".info__Crews");

addEventListener("click", async e => { 
    infoCrews.innerHTML = await getAllCrews(); 
});

addEventListener("click", async e => {
    let styles = document.querySelector("#styles");
    console.log(styles);
    styles.href = 'css/styleCREW.css';
});

console.log(await getAllCrews()); 
