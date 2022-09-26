document.write("<center><h1>Hola Mundo Alvaro</h1></center>")

//tipos de datos

//String
var saludo = "Hola Alvaro"
var dni = "47082918"
document.write("<center><p>Esto es una cadena: </p><h3>" + saludo + " " + dni + "</h3></center>")


//Numbers
var numero = 1
var numeroDecimal = 2.21
var numeroNegativo = -3

document.write("<center><p>Esto son numeros: </p><h3>" + (numero + numeroDecimal + numeroNegativo).toFixed(2) + "</h3></center>")

//Booleans

var estadoActivo = false

if (estadoActivo) {
    document.write("<center><p>Estado Persona: </p><h3>" + estadoActivo + "</h3></center>")
} else {
    document.write("<center><p>Estado Persona: </p><h3>" + estadoActivo + "</h3></center>")
}

//Arrays

var arregloPaises = ['Colombia', 'Peru', 'Venezuela', 'Chile', 'Argentina']

document.write("<center><h3>Lista de Paises </h3></center>")

var count = 0
arregloPaises.forEach(element => {
    count++
    document.write("<center><p>" + count + " Pais Latino Americano: </p><h3>" + element + "</h3></center> <br>")
});

//Object
var objectoPersona1 = { name: "Alvaro Aguinaga", age: 28, gender: "Masculino", telephone: "986809252" };
var objectoPersona2 = { name: "Susan Aracelli", age: 27, gender: "Femenino", telephone: "985412323" };
var objectoPersona3 = { name: "Dalia Aguinaga", age: 06, gender: "Femenino", telephone: "985412321" };
var objectoPersona4 = { name: "Teresa Usca", age: 50, gender: "Femenino", telephone: "985412453" };

var arregloPersonas = [objectoPersona1, objectoPersona2, objectoPersona3, objectoPersona4];

document.write("<center> <h2>HTML Table Persona</h2><table><tr><th>Nombre</th><th>Edad</th><th>Sexo</th><th>Telefono</th></tr>");
arregloPersonas.forEach(element =>
    document.write("<tr><td>" + element.name + "</td><td>" + element.age + "</td><td>" + element.gender + "</td><td>" + element.telephone + "</td></tr>")
);
document.write("</table></center>");
