import { plantillaImg } from "./img.js";
import { plantillaPagination } from "./pagination.js";
import { getCapsule, getCore, getCrew, getLandpad, getLaunchpad, getPayload, getRocket, getShip } from "../modules/app.js";

let vcore;
let vlandpad;
let vrocket;
let vcrew;
let vship;
let vcapsule;
let vpayload;
let vlaunchpad;

export const plantillaArrays = async (data, namefuction)=>{
    let plantilla = "";
    if (data.length == 0){
        plantilla = /*html*/`
            <td>None</td>
        </tr>
        <tr>
            <td></td>      
        `
    }else{
        if(namefuction == getCapsule){
            for (const element of data){
                let value = await namefuction(element);
                plantilla += /*html*/`
                    <td>${value.serial}</td>
                </tr>
                <tr>
                    <td></td>      
                `
            }
        }else{
            for (const element of data){
                let value = await namefuction(element);
                plantilla += /*html*/`
                    <td>${value.name}</td>
                </tr>
                <tr>
                    <td></td>      
                `
            }
        }
    }
    plantilla += /*html*/`</tr>`
    return plantilla;
}

export const plantillaLaunches = async (data, alldata)=>{
    let plantilla = "";
    let plantillaimg = "";
    let plantillaPag = "";
    plantillaimg = await plantillaImg(data.links.flickr.original);
    plantillaPag = await plantillaPagination(alldata.length);

    if (data.cores[0].core == null){vcore = "None"}else{vcore = await getCore(data.cores[0].core); vcore = vcore.serial};
    if (data.cores[0].landpad == null){vlandpad = "None"}else{vlandpad = await getLandpad(data.cores[0].landpad); vlandpad = vlandpad.name};
    if (data.rocket == null){vrocket = "None"}else{vrocket = await getRocket(data.rocket); vrocket = vrocket.name};
    if (data.launchpad == null){vlaunchpad = "None"}else{vlaunchpad = await getLaunchpad(data.launchpad); vlaunchpad = vlaunchpad.name};
    
    vcrew = await plantillaArrays(data.crew,getCrew);
    vship = await plantillaArrays(data.ships,getShip);
    vcapsule = await plantillaArrays(data.capsules,getCapsule);
    vpayload = await plantillaArrays(data.payloads,getPayload);

    plantilla += /*html*/`
        <div class="column left">
            <ul class="list">
                <li><img src="storage/img/item.svg">Decription:</li>
                <p>${data.details}</p>
                <li><img src="storage/img/item.svg">More info:</li>
                <a href="${data.links.wikipedia}">Wikipedia</a><br><br>
                <a href="${data.links.article}">Article</a><br><br>
                <a href="${data.links.webcast}">Youtube</a><br><br>
                <a href="${data.links.presskit}">Presskit</a>
                <p></p>
                <li><img src="storage/img/item.svg">Reddit:</li>
                <a href="${data.links.reddit.campaign}">Campaign</a><br><br>
                <a href="${data.links.reddit.launch}">Launch</a><br><br>
                <a href="${data.links.reddit.media}">Media</a>
            </ul>
        </div>
        <div class="column center">
            <div class="section">
                <div class="title-section">
                    <h2>${data.name.toUpperCase()}</h2>
                    <div class="circular-bar">
                        <img src="${data.links.patch.small}">
                    </div>
                </div>
            </div>
            <div class="horizontal-sections">
                <div class="scroll-container">
                    <h5>Information launche</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${data.name}</td>
                            </tr>
                            <tr>
                                <td>Static fire date utc:</td>
                                <td>${data.static_fire_date_utc}</td>
                            </tr>
                            <tr>
                                <td>Static fire date unix:</td>
                                <td>${data.static_fire_date_unix}</td>
                            </tr>
                            <tr>
                                <td>Window:</td>
                                <td>${data.window}</td>
                            </tr>
                            <tr>
                                <td>Flight number:</td>
                                <td>${data.flight_number}</td>
                            </tr>
                            <tr>
                                <td>Date utc:</td>
                                <td>${data.date_utc}</td>
                            </tr>
                            <tr>
                                <td>Date unix:</td>
                                <td>${data.date_unix}</td>
                            </tr>
                            <tr>
                                <td>Date local:</td>
                                <td>${data.date_local}</td>
                            </tr>
                            <tr>
                                <td>Date precision:</td>
                                <td>${data.date_precision}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="image-container">
                    ${plantillaimg}
                </div>
                <div class="scroll-container">
                    <h5>Cores Information</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Core:</td>
                                <td>${vcore}</td>
                            </tr>
                            <tr>
                                <td>Flight:</td>
                                <td>${data.cores[0].flight}</td>
                            </tr>
                            <tr>
                                <td>Landing type:</td>
                                <td>${data.cores[0].landing_type}</td>
                            </tr>
                            <tr>
                                <td>Landpad:</td>
                                <td>${vlandpad}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="column right">
            <table>
                <tbody>
                    <tr>
                        <td><h3>Rocket:</h3></td>
                        <td>${vrocket}</td>
                    </tr>
                    <tr>
                        <td><h3>Crew:</h3></td>
                        ${vcrew}   
                    </tr>
                    <tr>
                        <td><h3>Ships:</h3></td>
                        ${vship}
                    </tr>
                    <tr>
                        <td><h3>Capsules:</h3></td>
                        ${vcapsule}  
                    </tr>
                    <tr>
                        <td><h3>Payloads:</h3></td>
                        ${vpayload}
                    </tr>
                    <tr>
                        <td><h3>Launchpad:</h3></td>
                        <td>${vlaunchpad} lb</td>    
                    </tr>
                </tbody>
            </table>
            <div class="pagination-container">
                ${plantillaPag}
            </div>
        </div>
    `;
    return plantilla;
};