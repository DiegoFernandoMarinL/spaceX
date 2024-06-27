export const plantillaDragons = async (data)=>{
    let plantilla = "";
    let estado = false;
    let cont = 0;
    for (const element of data){
        if (element.active == true){
            estado = "Active";
        }else{estado = "Inactive"};
        plantilla += /*html*/`
            <article class="name__value">
                <p>${element.name}</p>
            </article>
            <div class="info__value">
                <article class="left__container">
                    <p>prueba</p>
                </article>
                <article class="center__container">
                    <article class="content__graphics">
                        <p>prueba</p>
                    </article>
                    <article class="content__image">
                        <img src="https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg" referrerpolicy="no-referrer">
                        <img src="https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg" referrerpolicy="no-referrer">
                    </article>
                    <article class="content__scroll">
                        <div class="scroll__left">
                            <p>Type: ${element.type}</p>
                            <p>Status: ${estado}</p>
                            <p>Capacity: ${element.crew_capacity}</p>
                            <p>Sidewall Angle (degrees): ${element.sidewall_angle_deg}</p>
                            <p>Orbit Duration (years): ${element.orbit_duration_yr}</p>
                            <p>Dry Mass (kg): ${element.dry_mass_kg}</p>
                            <p>Dry Mass (lb): ${element.dry_mass_lb}</p>
                        </div>
                        <div class="scroll__rigth">
                            <p>Type: ${element.thrusters[cont].type}</p>
                            <p>Amount: ${element.thrusters[cont].amount}</p>
                            <p>Pods: ${element.thrusters[cont].pods}</p>
                            <p>Fuel 1: ${element.thrusters[cont].fuel_1}</p>
                            <p>Fuel 2: ${element.thrusters[cont].fuel_2}</p>
                            <p>ISP: ${element.thrusters[cont].isp}</p>
                            <p>Thrust (kN): ${element.thrusters[cont].thrust.kN}</p>
                            <p>Thrust (lbf): ${element.thrusters[cont].thrust.lbf}</p>
                        </div>
                        <div></div>
                    </article>
                </article>
                <article class="rigth__container">
                    <p>prueba</p>
                </article>
            </div>
        `;
        cont++;
        return plantilla;
    };
};