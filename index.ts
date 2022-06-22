import { Socie } from "./model/socie.model";
// 1. Select the div element using the id property
const app = document.getElementById("app");
//Defino a un array de tipo Socie, lo inicio vacio//
let socies:Array<Socie>=[]
//Frech que devuelve los datos

fetch("http://localhost:5000/socies/")
.then (resp =>{
    resp.json()
    .then(data=>{
        socies=data.socies      ;
    })
});

//For loop de cada socie dentro del Array
socies.forEach(socies => {
    let p_nombre = document.createElement("p");
    p_nombre.textContent = socies.nombre;
    app?.appendChild(p_nombre)
    
});

//for loop de cada socie dentro del array
socies.forEach(socie=>{
    let tr=document.createElement("tr");
    //Nombre
    let td_nombre=document.createElement("td");td_nombre.textContent=socie.nombre;
    //Apellido
    let td_apellido=document.createElement("td");td_apellido.textContent=socie.apellido;
    //Nickname
    let td_nick=document.createElement("td");td_nick.textContent=socie.nick
    //Edad
    let td_edad=document.createElement("td");td_edad.textContent=socie.edad.toString(10);
    
        tr?.appendChild(td_nombre);
        tr?.appendChild(td_apellido);
        tr?.appendChild(td_nick);
        tr?.appendChild(td_edad);
        app?.appendChild(tr);
    })