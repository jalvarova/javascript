const user = { username: "walavo", pwd: "1234", role: "" }

function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    
    if (isNotEmpty(username)) {
        alert("Please enter the username.");
        return false;
    }
    if (isNotEmpty(password)) {
        alert("Please enter the password.");
        return false;
    }

    if (username == user.username && password == user.pwd) {
        alert('Login Successful');
        let roleDescription = selectRole(user.role)
        document.writeln("<head><link rel='stylesheet' href='css/list.css' media='screen' type='text/css' /><head>");
        document.writeln("<body>");
        document.writeln("<h1>Hola " + username + "!!! Tienes el Role: " + roleDescription + "</h1>");
        document.writeln("<br>");
        document.writeln("<ul>");
        document.writeln("<li>");
        document.writeln("<a href=\"html/calculator.html\"/>Calculadora</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/research.html\"/>Research</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/marte.html\"/>Marte</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/table.html\"/>Table</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/canvas.html\"/>Canvas</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/fizz-buzz.html\"/>FizzBuzz</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/demo.html\"/>Demo</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/http-request.html\"/>Html Request</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/function-structure.html\"/>Tipo de Datos</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/canva-event.html\"/>Canva Event</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/canva-mousevent.html\"/>Canva Mouse</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"html/canva-keyboardevent.html\"/>Canva Keyboardevent</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"play/pakiman.html\"/>Pakiman</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"play/villa.html\"/>Villa</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"util/delay.html\"/>Delay</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"util/eyes.html\"/>Eyes</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"util/loader.html\"/>Loader</a>");
        document.writeln("</li><li>");
        document.writeln("<a href=\"util/adapteble-img.html\"/>Adaptable</a>");
        document.writeln("</li>");
        document.writeln("</ul>");
        document.writeln("<a href='index.html'>Return</a>");
        document.writeln("</body>");

    } else {
        alert('Login Failed');
    }
};

function isNotEmpty(cadena){
    return cadena == null| cadena == ""
}

function selectRole(role) {
    let roleDescription
    switch (role) {
        case "ADMIN":
            roleDescription = "Administrador"
            break;
        case "USER":
            roleDescription = "Usuario"
            break;
        default:
            roleDescription = "None"
            break;
    }
    return roleDescription
};