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

export const plantillaCores = async (data, alldata)=>{
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
                        <p>Block: ${block}</p>
                        <p>Reuse count: ${element.reuse_count}</p>
                        <p>Rtls attempts: ${element.rtls_attempts}</p>
                        <p>Rtls landings: ${element.rtls_landings}</p>
                        <p>Asds attempts: ${element.asds_attempts}</p>
                        <p>Asds landings: ${element.asds_landings}</p>
                    </div>
                    <div class="description__info">
                        <h5>Launches</h5>
                        <p>${vlaunch}</p>
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