import { plantillaCrew } from "../components/crew.js";
import { plantillaDragons } from "../components/dragons.js";

export const getAllCrews = async () => { 
    let res = await fetch("https://api.spacexdata.com/v4/crew"); 
    let data = await res.json(); 
    let plantilla= [];

    function dividirArrayEnPartes(array, numeroDePartes) {
        const longitudParte = Math.ceil(array.length / numeroDePartes);
        const partes = [];
        for (let i = 0; i < array.length; i += longitudParte) {
            partes.push(array.slice(i, i + longitudParte));
        }
        return partes;
    }
    const array = data;
    const numeroDePartes = 10;
    const dataDividida = dividirArrayEnPartes(array, numeroDePartes);
    console.log(dataDividida);

    for (let index = 0; index < 3; index++) {
        const element = data[index];
        plantilla.push(element);
    }
    plantilla = await plantillaCrew(plantilla);
    return plantilla; 
};

export const getLaunche = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${dato}`); 
    let data = await res.json();
    return data; 
}; 

export const getAllDragons = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/dragons`); 
    let data = await res.json();
    console.log(data);
    let plantilla = [];
    plantilla = await plantillaDragons(data);
    console.log(plantilla);
    return plantilla;
}