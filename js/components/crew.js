import { getAllLaunches } from "../modules/app.js";

export const plantillaCrew = (data)=>{
    let plantilla = "";
    data.forEach(element => {
        let launche = getAllLaunches(element.launches);
        console.log(launche);
        plantilla += /*html*/`
            <article class="info__member">
                <div class="container__info">
                    <div class="content__info">
                        <h1>${element.name}</h1>
                        <h5>${element.agency} - ${element.status}</h5>
                        <p>${element.wikipedia}</p>
                        <p>Participo en:<br>${launche.name}</p>
                    </div>
                    <div class="image__info">
                        <img src="${element.image}" referrerpolicy="no-referrer">
                    </div>
                </div>
            </article>
        `; 
    });
    return plantilla;
}