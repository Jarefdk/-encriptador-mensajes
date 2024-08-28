const d = document;
const textArea = d.querySelector(".form__input");
const Persona__Lupa = d.querySelector(".result__img");
const loaderRayo = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesenncriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

];
// FUNCION PARA ENCRIPTAR
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje [i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]){  
                encriptada = llaves[j][1];   //Reemplaza la letra por su equivalente encripatado
                break; // Termina el bucle cuando se encuentra la correspondencia 
   }           
      }   
	    mensajeEncriptado += encriptada;
   }  

  return mensajeEncriptado;
}
//FUNCION PARA DESENCRIPTAR
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
	return mensajeDesencriptado;
}
//OCULTAR ELEMENTOS DINAMICAMENTE
textArea.addEventListener("input", (e)=>{
    Persona__Lupa.style.display = "none";
    loaderRayo.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje."
    resultadoText.textContent = "";

})

//FUNCION DEL BOTON ENCRIPTAR
botonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
})

botonDesenncriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");


});

botonCopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
    Persona__Lupa.style.display = "block";
    loaderRayo.classList.add("hidden");
    resultadoTitulo.textContent = "El texto se copio";
    botonCopiar.classList.add("hidden");
    resultadoText.textContent = ""
    
    })
});