document.getElementById("pantalla2-notes").hidden = true;
document.getElementById("pantalla3-verNotas").hidden = false;
const bEntrar = document.getElementById("entrar");
bEntrar.addEventListener("click", () => {
  let usuario = document.getElementById("usuario").value;
  let contra = document.getElementById("contra").value;

  if (usuario == "Getzekook" && contra == 2003) {
    document.getElementById("pantalla1-login").hidden = true;
    document.getElementById("pantalla2-notes").hidden = false;
  } else {
    alert("TU no eres Amanda :)");
  }
});
const verBtn = document.getElementById("ver");
verBtn.addEventListener("click", () => {
  document.getElementById("pantalla2-notes").hidden = true;
  document.getElementById("pantalla3-verNotas").hidden = false;
});