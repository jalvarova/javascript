function suma() {
    

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    
    console.log(number1)

};


function resta() {
    
    
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    
    console.log(number2)

};


function validateInput(){

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if (isNotEmpty(number1)) {
        alert("Please enter the number1.");
        return false;
    }
    if (isNotEmpty(number2)) {
        alert("Please enter the number2.");
        return false;
    }
}

function isNotEmpty(cadena){
    return cadena == null || cadena == ""
}