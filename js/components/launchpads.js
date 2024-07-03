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

export const plantillaLaunchpads = async (data, alldata)=>{
    let plantilla = "";
    let plantillaPag = "";
    plantillaPag = await plantillaPagination(alldata.length);
    for (const element of data){
        let vlaunch = await plantillaArrays(element.launches, getLaunche);
        let vrocket = await plantillaArrays(element.rockets, getRocket);
        plantilla += /*html*/`
            <article class="info__cores">
                <div class="container__info_core">
                    <div class="content__info_core">
                        <h1>${element.name}</h1>
                        <h5>${element.full_name}</h5>
                        <p>Status: ${element.status}</p>
                        <p>Locality: ${element.locality}</p>
                        <p>Region: ${element.region}</p>
                        <p>Time Zone: ${element.timezone}</p>
                        <p>Latitude: ${element.latitude}</p>
                        <p>Longitude: ${element.longitude}</p>
                        <p>Launch attempts: ${element.launch_attempts}</p>
                        <p>Launch successes: ${element.launch_successes}</p>
                    </div>
                    <div class="description__info">
                        <div class="allLaunches">
                            <h5>Launches</h5>
                            <p>${vlaunch}</p>
                        </div>
                        <div class="allRockets">
                            <h5>Rockets</h5>
                            <p>${vrocket}</p>
                        </div>
                    </div>
                </div>
                <div class="pagination-container">
                    ${plantillaPag}
                </div>
            </article>
        `;
    };
    return plantilla;
};