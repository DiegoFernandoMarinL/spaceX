import { plantillaImg } from "./img.js";
import { plantillaPagination } from "./pagination.js";

export const plantillaRockets = async (data, alldata)=>{
    let plantilla = "";
    let estado = false;
    let plantillaimg = "";
    let plantillaPag = "";
    plantillaimg = await plantillaImg(data.flickr_images);
    plantillaPag = await plantillaPagination(alldata.length);
    if (data.active == true){
        estado = "Active";
    }else{estado = "Inactive"};
    plantilla += /*html*/`
        <div class="column left">
            <ul class="list">
                <li><img src="storage/img/item.svg">Decription:</li>
                <p>${data.description}</p>
                <li><img src="storage/img/item.svg">More info:</li>
                <a href="${data.wikipedia}">Wikipedia</a>
            </ul>
        </div>
        <div class="column center">
            <div class="section">
                <div class="title-section">
                    <h2>${data.name.toUpperCase()}</h2>
                    <div class="circular-bar">
                        <div class="circular-chart">
                            <svg viewBox="0 0 100 100">
                                <circle class="bg" cx="50" cy="50" r="40"></circle>
                                <circle class="progress" cx="50" cy="50" r="40" style="stroke-dashoffset: 75.36; stroke: #4caf50;"></circle>
                            </svg>
                            <span class="text">70%</span>
                        </div>
                        <div class="circular-chart">
                            <svg viewBox="0 0 100 100">
                                <circle class="bg" cx="50" cy="50" r="40"></circle>
                                <circle class="progress" cx="50" cy="50" r="40" style="stroke-dashoffset: 37.68; stroke: #2196f3;"></circle>
                            </svg>
                            <span class="text">85%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="horizontal-sections">
                <div class="scroll-container">
                    <h5>Information Dragon</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${data.name}</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>${data.type}</td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td>${estado}</td>
                            </tr>
                            <tr>
                                <td>Stages:</td>
                                <td>${data.stages}</td>
                            </tr>
                            <tr>
                                <td>Boosters:</td>
                                <td>${data.boosters}</td>
                            </tr>
                            <tr>
                                <td>Cost per launch:</td>
                                <td>${data.cost_per_launch}</td>
                            </tr>
                            <tr>
                                <td>Success rate pct:</td>
                                <td>${data.success_rate_pct}</td>
                            </tr>
                            <tr>
                                <td>First flight:</td>
                                <td>${data.first_flight}</td>
                            </tr>
                            <tr>
                                <td>Country:</td>
                                <td>${data.country}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>${data.company}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="image-container">
                    ${plantillaimg}
                </div>
                <div class="scroll-container">
                    <h5>Engine Information</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Type:</td>
                                <td>${data.thrusters[0].type}</td>
                            </tr>
                            <tr>
                                <td>Amount:</td>
                                <td>${data.thrusters[0].amount}</td>
                            </tr>
                            <tr>
                                <td>Pods:</td>
                                <td>${data.thrusters[0].pods}</td>
                            </tr>
                            <tr>
                                <td>Fuel 1:</td>
                                <td>${data.thrusters[0].fuel_1}</td>
                            </tr>
                            <tr>
                                <td>Fuel 2:</td>
                                <td>${data.thrusters[0].fuel_2}</td>
                            </tr>
                            <tr>
                                <td>ISP:</td>
                                <td>${data.thrusters[0].isp}</td>
                            </tr>
                            <tr>
                                <td>Thrust kN:</td>
                                <td>${data.thrusters[0].thrust.kN}</td>
                            </tr>
                            <tr>
                                <td>Thrust lbf:</td>
                                <td>${data.thrusters[0].thrust.lbf}</td>
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
                        <td>Launch payload mass</td>
                        <td>${data.launch_payload_mass.kg} kg</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.launch_payload_mass.lb} lb</td>    
                    </tr>
                    <tr>
                        <td>Launch payload vol</td>
                        <td>${data.launch_payload_vol.cubic_meters} m3</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.launch_payload_vol.cubic_feet} ft3</td>    
                    </tr>
                    <tr>
                        <td>Return payload mass</td>
                        <td>${data.return_payload_mass.kg} kg</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.return_payload_mass.lb} lb</td>    
                    </tr>
                    <tr>
                        <td>Return payload vol</td>
                        <td>${data.return_payload_vol.cubic_meters} m3</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.return_payload_vol.cubic_feet} ft3</td>    
                    </tr>
                    <tr>
                        <td>Payload volume</td>
                        <td>${data.pressurized_capsule.payload_volume.cubic_meters} m3</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.pressurized_capsule.payload_volume.cubic_feet} ft3</td>    
                    </tr>
                    <tr>
                        <td>Trunk volume</td>
                        <td>${data.trunk.trunk_volume.cubic_meters} m3</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.trunk.trunk_volume.cubic_feet} ft3</td>    
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>${data.diameter.meters} m</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.diameter.feet} ft</td>    
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