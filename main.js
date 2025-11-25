/* Simulador de trivia. Se hacen preguntas con 2 opciones, y si el usuario responde correctamente, se mostrará un mensaje indicando si es correcto i incorrecto*/

document.addEventListener("DOMContentLoaded", ()=>{
    //Array de preguntas
const preguntas= [
{
    pregunta : "Quién es el vocalista principal de Megadeth?",
    opcion1:"1- Dave Mustaine",
    opcion2:"2- Rob Halford",
    respuestaCorrecta: "1",
},
{
    pregunta : "En que año se formó Megadeth?", 
    opcion1: "1- 1983",
    opcion2: "2- 1988",
    respuestaCorrecta : "1",
},
{
    pregunta: "Cual de estos albumes pertenece a Megadeth?",
    opcion1:"1- Peace sells",
    opcion2:"2- Master of Puppets",
    respuestaCorrecta : "1",
},
{
    pregunta: "Cual de estos es el ultimo single de Megadeth?",
    opcion1: "1- Tipping Point",
    opcion2: "2- Orion",
    respuestaCorrecta :"1",
    
}];

const container = document.getElementById("container");
container.innerHTML = '';
preguntas.forEach(pregunta => {
    container.innerHTML += ` 
    <div class="card"> 
        <h3>${pregunta.pregunta}</h3> 
        <p>${pregunta.opcion1}</p> 
        <p>${pregunta.opcion2}</p>
        <form id="respuestaIngresada" name="respuestas">
            <input type="text" id="respuestaUsuario">
            <button type="submit" id="verificarRespuesta">Verificar respuesta</button>
            <p id="resultado"></p>
        </form> 
    </div> 
    ` 
    });

    const formulario = document.getElementById("respuestaIngresada");
    const inputDelUsuario = document.getElementById("respuestaUsuario");
    const resultadoP = document.getElementById("resultado");
    const avisoP = document.getElementById("aviso");
    
    const respuestaCorrectaActual = preguntas[0].respuestaCorrecta;

    if (formulario && inputDelUsuario){
        formulario.addEventListener("submit", (event)=>{
            event.preventDefault();
            const respuesta = inputDelUsuario.value.trim();
            if(respuesta === respuestaCorrectaActual) {
                resultadoP.textContent ="!Respuesta Correcta! Felicidades";
            }else{
                resultadoP.textContent ="Mal ahi! Te falta conocer más de Megadeth!";
            }
        inputDelUsuario.value= '';
        inputDelUsuario.focus();
        })
    }
});


