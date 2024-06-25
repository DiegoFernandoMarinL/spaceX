Se hace el testeo de las siguientes urls

export const getAllCapsules = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
}
export const getAllCompany = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();
    return data;
}
export const getAllCores = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/cores");
    let data = await res.json();
    return data;
}
export const getAllCrews = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/crew");
    let data = await res.json();
    let plantilla = /*html*/`
    <img src="${data[0].image}">`;
    return plantilla;
}
export const getAllDragons = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/dragons");
    let data = await res.json();
    return data;
}

let imagen = document.querySelector("#prueba");

addEventListener("DOMContentLoaded", async e=>{
    imagen.innerHTML = await getAllCrews();
})

console.log(await getAllCapsules());
console.log(await getAllCompany());
console.log(await getAllCores());
console.log(await getAllCrews());
console.log(await getAllDragons());
