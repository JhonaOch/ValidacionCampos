# ValidacionCampos
•	2. Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
 
•	a. Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador.
Se borra si el usuario ingresa letras y también si se pasa de la dimensión de la cedula.

•	b. Se debe validar qué, en el campo del nombre, ingrese únicamente dos nombres y que permita ingresar sólo letras.
 
De igual manera si el usuario ingresa números se borra los números ingresados.
•	c.Se debe validar qué, en el campo del apellido, ingrese únicamente dos apellidos y que permita ingresar sólo letras.
  
De igual manera si el usuario ingresa números se borra los números ingresados ya que el texto solo permite letras.
•	d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo
números.
 
Solo permite el ingreso de números y de igual manera se borrara cuando se ingrese letras.
•	e. Se debe validar que la fecha de nacimiento ingrese en el formato
dd/mm/yyyy.
 
 
Solo permite el formato de fecha establecido previamente

•	f. Se debe validar qué, en el campo correo electrónico, permita ingresar un
correo válido. Se considera un correo válido, cuando comienza por tres o
más valores alfanuméricos, luego un @, seguido por la extensión
“ups.edu.ec” o “est.ups.edu.ec”. 

Solo permite la extensión del correo de la universidad.
•	Codigo
 
•	ValidacionJs
var cedulas = false
var nombreUsuario = false
var apellidoUsuario = false
var fecha = false
var email = false
var contrasenia = false

function validarCamposObligatorios() {
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            elemento.style.border = "1px solid red"
        }
    }
    console.log("cedula: " + cedulas)
    console.log("nombre: " + nombreUsuario)
    console.log("apellido: " + apellidoUsuario)
    console.log("fecha: " + fecha)
    console.log("email: " + email)
    console.log("pass: " + contrasenia)
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else if (cedulas == false || nombreUsuario == false || apellidoUsuario == false || fecha == false || email == false || contrasenia == false) {
        alert("Corriga los campos")
        return false
    }
    else {
        return true
    }
}

function validarNumeros(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;

    if (letra >= 96 && letra <= 105 || letra == 8) {
        span.style.display = "none"
        if (element.id == 'cedula') {
            validarCedula(label, element)
        }
    } else {
        span.innerHTML = "Introdusca Numeros"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarCedula(label, element) {
    let span = document.getElementById(label)
    if (element.value.length != 10) {
        span.innerHTML = "Cedula incorrecta"
        span.style.display = "block"
        cedulas = false
    } else {
        span.style.display = "none"
        cedulas = true
    }
}

function validarLetras(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;
    console.log(letra)
    if (letra >= 65 && letra <= 90 || letra == 32 || letra == 8 || letra == 16) {
        span.style.display = "none"
        validarNombres(label, element)
    } else {
        span.innerHTML = "Introdusca letras"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarNombres(label, element) {
    let span = document.getElementById(label)
    let text = element.value
    if (text.split(" ").length > 2) {
        if (element.id == 'nombre') {
            span.innerHTML = "Nombres incorrectos"
            nombreUsuario = false
        } else {
            span.innerHTML = "Apellidos incorrectos"
            apellidoUsuario = false
        }
        span.style.display = "block"
    } else {
        nombreUsuario = true
        apellidoUsuario = true
        span.style.display = "none"
    }
}
function validarCorreo(label, element) {
    let email = element.value
    let span = document.getElementById(label)
    console.log(email.search("@est.ups.edu.ec"))
    if ((email.search("@ups.edu.ec") > 0) || (email.search("@est.ups.edu.ec") > 0)) {
        span.style.display = "none"
        email = true
    } else {
        span.innerHTML = "Correo electronico incorrecto"
        span.style.display = "block"
        email = false
    }
}

function validarFecha(label, element) {
    let span = document.getElementById(label)
    var string = String(element.value);
    arrayFecha = string.split("/");
    console.log(arrayFecha)
    var valor = new Date(arrayFecha[2], arrayFecha[1], arrayFecha[0]);
    console.log(isNaN(valor))
    if (isNaN(valor)) {
        fecha = false
        span.innerHTML = "Fecha incorrecta"
        span.style.display = "block"
    } else {
        fecha = true
        span.style.display = "none"
    }
}

function validarPass(label) {
    let span = document.getElementById(label)
    let pass1 = document.getElementById('pass').value
    let pass2 = document.getElementById('cpass').value
    if (pass1 != pass2) {
        span.innerHTML = "Las contraseñas no coinciden"
        span.style.display = "block"
        contrasenia = false
    } else {
        span.style.display = "none"
        contrasenia = true
    }
}

•	Index
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Archivos/indexAd.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet">
    <script type="text/javascript" src="js/validacion.js"></script>
</head>

<body>
    <header>
        <h1>Formulario</h1>
    </header>
    <section>
        <div id=contenido>
            <fieldset>
            <h2>Registro</h2>
            <form method="POST" onsubmit="return validarCamposObligatorios()">
                <span class="error" id="errorCedula">Error de Edicion</span>
                <br>
                <label for="cedula">Cedula</label>
                <br>
                <input type="text" name="cedula" id="cedula" onkeyup="validarNumeros(event,'errorCedula',this)">
                <br>
                <span class="error" id="errorNombre">Error de Edicion</span>
                <br>
                <label for="nombre">Nombres</label>
                <br>
                <input type="text" name="nombre" id="nombre" onkeyup="validarLetras(event,'errorNombre',this)">
                <br>
                <span class="error" id="errorApellico">Error de Edicion</span>
                <br>
                <label for="apellido">Apellidos</label>
                <br>
                <input type="text" name="apellido" id="apellido" onkeyup="validarLetras(event,'errorApellico',this)">
                <br>
                <span class="error" id="errorDireccion">Error de Edicion</span>
                <br>
                <label for="direccion">Direccion</label>
                <br>
                <input type="text" name="direccion" id="direccion">
                <br>
                <span class="error" id="errorTelefono">Error de Edicion</span>
                <br>
                <label for="telefono">Telefono</label>
                <br>
                <input type="text" name="telefono" id="telefono" onkeyup="validarNumeros(event,'errorTelefono',this)">
                <br>
                <span class="error" id="errorFechaNac">Error de Edicion</span>
                <br>
                <label for="fechaNac">Fecha de nacimiento</label>
                <br>
                <input type="text" name="fechaNac" id="fechaNac" onkeyup="validarFecha('errorFechaNac',this)">
                <br>
                <span class="error" id="errorEmail">Error de Edicion</span>
                <br>
                <label for="email">Email</label>
                <br>
                <input type="text" name="email" id="email" onkeyup="validarCorreo('errorEmail',this)">
                <br>
                <span class="error" id="errorPass">Error de Edicion</span>
                <br>
                <label for="pass">Contraseña</label>
                <br>
                <input type="password" name="pass" id="pass">
                <br>
                <span class="error" id="errorCPass">Error de Edicion</span>
                <br>
                <label for="cpass">Confirmar Contraseña</label>
                <br>
                <input type="password" name="cpass" id="cpass" onkeyup="validarPass('errorCPass')">

                <input class="boton_personalizado" type="submit" value="Crear">
            </form>
        </fieldset>
        </div>
    </section>
</body>

</html>

