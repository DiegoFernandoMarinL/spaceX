export const plantillaDragons = async (data)=>{
    let plantilla = "";
    let estado = false;
    let cont = 0;
    for (const element of data){
        
        if (element.active == true){
            estado = "Active";
        }else{estado = "Inactive"};
        plantilla += /*html*/`
            <div class="column left">
                <ul class="list">
                    <li><img src="storage/img/item.svg">Decription:</li>
                    <p>${element.description}</p>
                    <li><img src="storage/img/item.svg">More info:</li>
                    <a href="${element.wikipedia}">${element.wikipedia}</a>
                </ul>
            </div>
            <div class="column center">
                <div class="section">
                    <div class="title-section">
                        <h2>${element.name.toUpperCase()}</h2>
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
                                    <td>${element.name}</td>
                                </tr>
                                <tr>
                                    <td>Type:</td>
                                    <td>${element.type}</td>
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    <td>${estado}</td>
                                </tr>
                                <tr>
                                    <td>Material:</td>
                                    <td>${element.heat_shield.material}</td>
                                </tr>
                                <tr>
                                    <td>Size meters:</td>
                                    <td>${element.heat_shield.size_meters}</td>
                                </tr>
                                <tr>
                                    <td>Temp degrees:</td>
                                    <td>${element.heat_shield.temp_degrees}</td>
                                </tr>
                                <tr>
                                    <td>Dev partner:</td>
                                    <td>${element.heat_shield.dev_partner}</td>
                                </tr>
                                <tr>
                                    <td>Crew capacity:</td>
                                    <td>${element.crew_capacity}</td>
                                </tr>
                                <tr>
                                    <td>Sidewall angle deg:</td>
                                    <td>${element.sidewall_angle_deg}</td>
                                </tr>
                                <tr>
                                    <td>Orbit duration yr:</td>
                                    <td>${element.orbit_duration_yr}</td>
                                </tr>
                                <tr>
                                    <td>Dry mass kg:</td>
                                    <td>${element.dry_mass_kg}</td>
                                </tr>
                                <tr>
                                    <td>Dry mass lb:</td>
                                    <td>${element.dry_mass_lb}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div class="image-container">
                        <img src="https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg">
                        <img src="https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg">
                    </div>
                    <div class="scroll-container">
                        <h5>Engine Information</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Type:</td>
                                    <td>${element.thrusters[cont].type}</td>
                                </tr>
                                <tr>
                                    <td>Amount:</td>
                                    <td>${element.thrusters[cont].amount}</td>
                                </tr>
                                <tr>
                                    <td>Pods:</td>
                                    <td>${element.thrusters[cont].pods}</td>
                                </tr>
                                <tr>
                                    <td>Fuel 1:</td>
                                    <td>${element.thrusters[cont].fuel_1}</td>
                                </tr>
                                <tr>
                                    <td>Fuel 2:</td>
                                    <td>${element.thrusters[cont].fuel_2}</td>
                                </tr>
                                <tr>
                                    <td>ISP:</td>
                                    <td>${element.thrusters[cont].isp}</td>
                                </tr>
                                <tr>
                                    <td>Thrust kN:</td>
                                    <td>${element.thrusters[cont].thrust.kN}</td>
                                </tr>
                                <tr>
                                    <td>Thrust lbf:</td>
                                    <td>${element.thrusters[cont].thrust.lbf}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="trapezoid-container">
                    <div class="trapexoid-scroll">
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="storage/img/crew.png">
                                <span>Vista 1</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="storage/img/crew.png">
                                <span>Vista 2</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="storage/img/crew.png">
                                <span>Vista 3</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="storage/img/crew.png">
                                <span>Vista 4</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="storage/img/crew.png">
                                <span>Vista 5</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="vista3.png">
                                <span>Vista 6</span>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon-inner">
                                <img src="vista3.png">
                                <span>Vista 7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <table>
                    <tbody>
                        <tr>
                            <td>Item 1</td>
                            <td>Texto</td>
                        </tr>
                        <tr>
                            <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                            <td>Texto</td>    
                        </tr>
                        <tr>
                            <td>Item 1</td>
                            <td>Texto</td>
                        </tr>
                        <tr>
                            <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                            <td>Texto</td>    
                        </tr>
                    </tbody>
                </table>
                <div class="pagination-container">
                    <a href="#" class="pagination">1</a>
                    <a href="#" class="pagination">2</a>
                    <a href="#" class="pagination">3</a>
                    <a href="#" class="pagination">4</a>
                    <a href="#" class="pagination">5</a>
                    <a href="#" class="pagination">6</a>
                    <a href="#" class="pagination">7</a>
                    <a href="#" class="pagination">8</a>
                    <a href="#" class="pagination">9</a>
                    <a href="#" class="pagination">10</a>
                </div>
            </div>
        `;
        cont++;
        return plantilla;
    };
};