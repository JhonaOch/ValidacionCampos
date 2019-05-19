var cedula = false
var nombre = false
var apellido = false
var fecha = false
var correo = false
var pass = false

function validarCamposObligatorios() {
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            elemento.style.border = "1px solid red"
        }
    }
    console.log("cedula: " + cedula)
    console.log("nombre: " + nombre)
    console.log("apellido: " + apellido)
    console.log("fecha: " + fecha)
    console.log("email: " + correo)
    console.log("pass: " + pass)
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else if (cedula == false || nombre == false || apellido == false || fecha == false || correo == false || pass == false) {
        alert("Corriga los campos")
        return false
    }
    else {
        return true
    }
}
