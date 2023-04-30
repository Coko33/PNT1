let formBackground = document.getElementById("formBackground");
let inputNombre = document.getElementById("input-nombre");
let inputApellido = document.getElementById("input-apellido");
let inputEmail = document.getElementById("input-email");
let inputTelefono = document.getElementById("input-telefono");
let msjInvalido0 = document.getElementById("mensajeInvalido0");
let msjInvalido1 = document.getElementById("mensajeInvalido1");
let msjInvalido2 = document.getElementById("mensajeInvalido2");
let msjInvalido3 = document.getElementById("mensajeInvalido3");

let botonEnviar = document.getElementById("botonEnviar");

//validadores -> [0] para nombre o apellido, [1] para email, [2] para telefono
let validadores = [
  /^[A-Za-z\s]+$/g,
  /^[A-Za-z\s]+$/g,
  /^[\w-\.]+@([\w-]+\.)+([\w-]{2,4}){1,2}$/g,
  /^\d{10}$/g,
];
let execpciones = [
  " (solo letras y espacios)",
  " (solo letras y espacios)",
  " (el email es inválido)",
  " (debe contener 10 dígitos)",
];
let elMsjInvalidos = [msjInvalido0, msjInvalido1, msjInvalido2, msjInvalido3];

function abrirCerrarForm() {
  formBackground.classList.toggle("active");
}

botonEnviar.addEventListener("click", function () {
  let email = inputEmail.value;
  console.log(email);
});

function chequear(e, indexValidador) {
  if (validadores[indexValidador].test(e.target.value)) {
    elMsjInvalidos[indexValidador].innerHTML = "";
    e.target.classList.remove("campoInvalido");
  } else {
    e.target.classList.add("campoInvalido");
    elMsjInvalidos[indexValidador].innerHTML = execpciones[indexValidador];
  }
}

inputNombre.addEventListener("focusout", (e) => chequear(e, 0));
inputApellido.addEventListener("focusout", (e) => chequear(e, 1));
inputEmail.addEventListener("focusout", (e) => chequear(e, 2));
inputTelefono.addEventListener("focusout", (e) => chequear(e, 3));
