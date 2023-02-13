var number = document.getElementById("txtNumber");
var action = document.getElementById("btnAction");

action.addEventListener("click", algorithFizzBuzz)

function algorithFizzBuzz() {
    console.log(number.value)
    for (let index = 0; index < number.value; index++) {
        if (isDivisible(index, 3)) {
            document.write("Fizz");
        }
        if (isDivisible(index, 5)) {
            document.write("Buzz");
        }
        if (!isDivisible(index, 3) && !isDivisible(index, 5)) {
            document.write(index);
        }
        document.write("<br/>");
    }
}

function isDivisible(num, divisor) {

    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }

}
