let x = 0;
let o = 0;

function colocar() {
  sumar();
  parSum();
  reemplazarLabelPorBoton();

  if (x === 3) {
    let texto = document.getElementById("id_titulo");
    let nuevotexto = document.createElement("button");
    nuevotexto.textContent = "Gadador X";
    texto.parentNode.replaceChild(nuevotexto, texto);
  } else if (o === 3) {
    let texto = document.getElementById("id_titulo");
    let nuevotexto = document.createElement("button");
    nuevotexto.textContent = "Gadador O";
    texto.parentNode.replaceChild(nuevotexto, texto);
  }
}

function sumar() {
  let filaval = document.getElementById("id_fila");
  let columnaval = document.getElementById("id_columna");
  let fila = parseInt(filaval.value);
  let columna = parseInt(columnaval.value);
  let sumaval = fila + columna;
  console.log(sumaval);
  console.log(parSum());
  return sumaval;
}

function parSum() {
  let filaval = document.getElementById("id_fila");
  let columnaval = document.getElementById("id_columna");
  let fila = parseInt(filaval.value);
  let columna = parseInt(columnaval.value);
  let sumaval = fila + columna;
  return sumaval % 2 === 0;
}

function XoO() {
  if (parSum()) {
    x = x + 1;
    return "X";
  } else {
    return "O";
    o = o + 1;
  }
}

function reemplazarLabelPorBoton() {
  const id =
    "input" +
    document.getElementById("id_fila").value +
    "x" +
    document.getElementById("id_columna").value;
  console.log(id);
  const label = document.getElementById(id);
  const boton = document.createElement("button");
  boton.textContent = XoO();
  label.parentNode.replaceChild(boton, label);
}
