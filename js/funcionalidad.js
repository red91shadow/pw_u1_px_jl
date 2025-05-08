document.querySelector(".verButton").addEventListener("click", handleClick);

function handleClick() {
  let fila = getFila();
  let columna = getColumna();

  if (esValido(fila, columna)) {
    reemplazarLabelConBoton(fila, columna);
  } else {
    alert("Valores inválidos");
  }
}

function getFila() {
  return parseInt(document.querySelector(".id_fila").value);
}

function getColumna() {
  return parseInt(document.querySelector(".id_columna").value);
}

function esValido(fila, columna) {
  return fila >= 1 && fila <= 3 && columna >= 1 && columna <= 3;
}

function reemplazarLabelConBoton(fila, columna) {
  let id = "input" + ((fila - 1) * 3 + columna);
  let label = document.getElementById(id);
  let nuevoButton = crearBoton();
  label.parentNode.replaceChild(nuevoButton, label);
}

function crearBoton() {
  let boton = document.createElement("button");
  boton.innerHTML = "Marcado";
  boton.classList.add("button");
  return boton;
}
