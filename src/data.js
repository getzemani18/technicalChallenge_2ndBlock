// Pantallas 
document.getElementById("pantalla2-notes").hidden = true;
document.getElementById("pantalla3-verNotas").hidden= true;


// Pantalla login
const bEntrar = document.getElementById("entrar")
bEntrar.addEventListener("click", () => {
let usuario = document.getElementById("usuario").value;
let contra = document.getElementById("contra").value;
if (usuario == "Getzekook" && contra == 2003 ) {
    document.getElementById("pantalla1-login").hidden= true;
    document.getElementById("pantalla2-notes").hidden = false;
} else {
    alert("TU no eres Amanda :)")
}
})

// Pantalla ára entrar a la teecera pantalla

const verBtn = document.getElementById("ver")
verBtn.addEventListener("click", () => {
    document.getElementById("pantalla2-notes").hidden= true
    document.getElementById("pantalla3-verNotas").hidden= false
})


// Pantalla para regresar al login
const salirBtn = document.getElementById("salir")
salirBtn.addEventListener("click", () => {
    document.getElementById("pantalla1-login").hidden= false;
     document.getElementById("pantalla3-verNotas").hidden= true

})