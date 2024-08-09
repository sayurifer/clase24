
const equipo1 = [ "Kiara", "Adamaris" , "Jessica","Rupay","Sayuri"];
let lista ="";


for (let i = 0; i <equipo1.length; i++){
lista += `<li>${equipo1[i]}</li>`; 
}

document.getElementById("integrantes").innerHTML =`<ul>${lista}</ul> `;
document.getElementById("lider").innerText= equipo1[1];