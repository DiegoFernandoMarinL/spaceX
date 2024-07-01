export const plantillaGraphics = async (len, data)=>{
    let plantilla = "";
    for (let index = 0; index < len; index++) {
        plantilla += /*html*/`
            <div class="circular-chart">
                <svg viewBox="0 0 100 100">
                    <circle class="bg" cx="50" cy="50" r="40"></circle>
                    <circle class="progress" cx="50" cy="50" r="40" style="stroke-dashoffset: 75.36; stroke: #4caf50;"></circle>
                </svg>
                <span class="text">${data.payload_weights[index].name}<br>${data.payload_weights[index].kg}kg</span>
            </div>
        `
    }
    console.log(plantilla);
    return plantilla;
}
