export const plantillaCrew = (data)=>{
    let plantilla = "";
    data.forEach(element => {
        plantilla += /*html*/`
            <article class="info__member">
                <div class="container__info">
                    <div class="content__info">
                        <h1>${element.name}</h1>
                        <h5>${element.agency}</h5>
                        <p>${element.status}</p>
                        <p>${element.wikipedia}</p>
                        <p>Participo en:<br></p>
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