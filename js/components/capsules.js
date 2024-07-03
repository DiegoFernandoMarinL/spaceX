import { getLaunche } from "../modules/app.js";
import { plantillaPagination } from "./pagination.js";

export const plantillaArrays = async (data)=>{
    let plantilla = "";
    if (data.length == 0){
        plantilla = /*html*/`
            <p>None</p>      
        `
    }else{
        for (const [index,element] of data.entries()) {
            let value = await getLaunche(data[index]);
            plantilla += /*html*/`
                <p>${value.name}</p>    
            `
        }
    }
    return plantilla;
}

export const plantillaCapsules = async (data, alldata)=>{
    let plantilla = "";
    let plantillaPag = "";
    let block;
    plantillaPag = await plantillaPagination(alldata.length);
    for (const element of data){
        let vlaunch = await plantillaArrays(element.launches);
        if(element.block == null){block = "None"}else{block = element.block};
        plantilla += /*html*/`
            <article class="info__cores">
                <div class="container__info_core">
                    <div class="content__info_core">
                        <h1>${element.serial}</h1>
                        <h5>Status: ${element.status}</h5>
                        <p>${element.last_update}</p>
                        <p>Type: ${element.type}</p>
                        <p>Reuse count: ${element.reuse_count}</p>
                        <p>Water landings: ${element.water_landings}</p>
                        <p>Land landings: ${element.land_landings}</p>
                    </div>
                    <div class="description__info">
                        <h5>Launches</h5>
                        <p>${vlaunch}</p>
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