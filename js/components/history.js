import { plantillaPagination } from "./pagination.js";

export const plantillaHistory = async (data, alldata)=>{
    let plantilla = "";
    let plantillaPag = "";
    plantillaPag = await plantillaPagination(alldata.length);
    for (const element of data){
        plantilla += /*html*/`
            <article class="info__member">
                <div class="container__info">
                    <div class="content__info">
                        <h1>${element.title}</h1>
                        <h5>${element.event_date_utc} - ${element.event_date_unix}</h5>
                        <p>Biografia da click <a href="${element.links.article}" style="color: white">aqui</a></p>
                    </div>
                    <div class="image__info">
                        <p>${element.details}</p>
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