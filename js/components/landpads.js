import { getLaunche, getRocket } from "../modules/app.js";
import { plantillaPagination } from "./pagination.js";

export const plantillaArrays = async (data, fuctionGet)=>{
    let plantilla = "";
    if (data.length == 0){
        plantilla = /*html*/`
            <p>None</p>      
        `
    }else{
        for (const [index,element] of data.entries()) {
            let value = await fuctionGet(data[index]);
            plantilla += /*html*/`
                <p>${value.name}</p>    
            `
        }
    }
    return plantilla;
}

export const plantillaLandpads = async (data, alldata)=>{
    let plantilla = "";
    let plantillaPag = "";
    plantillaPag = await plantillaPagination(alldata.length);
    for (const element of data){
        let vlaunch = await plantillaArrays(element.launches, getLaunche);
        plantilla += /*html*/`
            <article class="info__cores">
                <div class="container__info_core">
                    <div class="content__info_core">
                        <h1>${element.name}</h1>
                        <h5>${element.full_name}</h5>
                        <p>${element.details}</p>
                        <p>Status: ${element.status}</p>
                        <p>Locality: ${element.locality}</p>
                        <p>Region: ${element.region}</p>
                        <p>Latitude: ${element.latitude}</p>
                        <p>Longitude: ${element.longitude}</p>
                        <p>Landing attempts: ${element.landing_attempts}</p>
                        <p>Landing successes: ${element.landing_successes}</p>
                        <p>Biografia da click <a href="${element.wikipedia}" style="color: white">aqui</a></p>
                    </div>
                    <div class="description__info">
                        <div class="allLaunches">
                            <h5>Launches</h5>
                            <p>${vlaunch}</p>
                        </div>
                    </div>
                </div>
            </article>
        `;
    };
    plantilla += /*html*/`
        <div class="pagination-container">
            ${plantillaPag}
        </div>
    `
    return plantilla;
};