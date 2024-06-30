import { plantillaCrew, } from "../components/crew.js";
import { plantillaDragons } from "../components/dragons.js";
import { plantillaRockets } from "../components/rockets.js";

export const getAllCrews = async (dato) => { 
    let res = await fetch("https://api.spacexdata.com/v4/crew"); 
    let data = await res.json(); 
    let plantilla= [];

    function dividirArray(array, Npartes) {
        let longitudParte = Math.ceil(array.length / Npartes);
        let partes = [];
        for (let i = 0; i < array.length; i += longitudParte) {
            partes.push(array.slice(i, i + longitudParte));
        }
        return partes;
    }
    let array = data;
    let Npartes = 10;
    let dataDividida = dividirArray(array, Npartes);
    plantilla = await plantillaCrew(dataDividida[dato]);
    return plantilla; 
};

export const getLaunche = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${dato}`); 
    let data = await res.json();
    return data; 
}; 

export const getAllDragons = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/dragons`); 
    let data = await res.json();
    let plantilla = await plantillaDragons(data[dato], data);
    return plantilla;
}

export const getAllRockets = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets`); 
    let data = await res.json();
    let plantilla = await plantillaRockets(data[dato], data);
    return plantilla;
}