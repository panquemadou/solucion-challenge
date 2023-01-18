
function encriptar() {
    let frase = document.getElementById("textoEncriptado").value.toLocaleLowerCase();

    let textoEncriptado = frase.replace(/e/img, "enter")
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("botonCopiar").style.display = "inline";
    document.getElementById("textoDesencriptado").style.display = "inline-block";
    let elementos = document.querySelectorAll(".desaparecerDos");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }

    document.getElementById("textoEncriptado").value = "";
    

}

function desencriptar() {
    let frase = document.getElementById("textoEncriptado").value.toLocaleLowerCase();

    let textoEncriptado = frase.replace(/enter/img, "e")
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoEncriptado").value = "";

}

// function copiar() {
//     let contenidoTexto = document.querySelector("#textoDesencriptado");
//     console.log(contenidoTexto);
//     contenidoTexto.select();
//     document.execCommand("copy");
// }

let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", async()=>{
    let mensajeDeSalida = document.getElementById("textoDesencriptado").textContent;
    await navigator.clipboard.writeText(mensajeDeSalida);
    
})



let btnEncriptar = document.querySelector("#botonEncriptado");
btnEncriptar.onclick = encriptar;

let btnDesencriptar = document.querySelector("#botonDesencriptar");
btnDesencriptar.onclick = desencriptar;

// let btnCopiar = document.querySelector("#botonCopiar");
// btnCopiar.onclick = copiar;