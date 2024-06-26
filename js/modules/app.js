import { plantillaCrew } from "../components/crew.js";

export const getAllCrews = async () => { 
    let res = await fetch("https://api.spacexdata.com/v4/crew"); 
    let data = await res.json(); 
    let plantilla= [];
    for (let index = 0; index < 3; index++) {
        const element = data[index];
        plantilla.push(element);
    }
    plantilla = plantillaCrew(plantilla);
    return plantilla; 
};

export const getAllLaunches = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${dato}`); 
    let data = await res.json();
    return data; 
}; 