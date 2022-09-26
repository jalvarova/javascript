const user = { username: "wa", pwd: "1234", role: "" }

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
        document.writeln("Hola " + username + "!!!. Tienes el Role: " + roleDescription);
        document.writeln("<br>");
        document.writeln("<a href=\"calculator.html\"/>Calculadora</a> | ");
        document.writeln("<a href=\"index.html\"/>Tipo de Datos</a>");
    } else {
        alert('Login Failed');
    }
};

function isNotEmpty(cadena){
    return cadena == null || cadena == ""
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
            roleDescription = "Anonymus"
            break;
    }
    return roleDescription
};