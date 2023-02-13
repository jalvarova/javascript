class Money {

    constructor(value, amount) {
        this.amount = amount;
        this.value = value;
    }


}

var boxs = [];
var delivered = [];
var cash = 0;
var div = 0;
var paper = 0;

boxs.push(new Money(100, 10));
boxs.push(new Money(50, 30));
boxs.push(new Money(20, 30));
boxs.push(new Money(10, 10));
boxs.push(new Money(5, 10));

var result = document.getElementById("result");

function deliverdMoney() {

    cash = parseInt(document.getElementById("cash").value);
    for (let box of boxs) {
        if (hasDiner()) {
            div = Math.floor(cash / box.value);
            console.log("div : " + div)
            var amount = box.amount;
            console.log("Amount : " + amount)
            if (div > amount) {
                paper = amount;
                console.log("Paper : " + paper)
            } else {
                paper = div;
                console.log("Else Paper : " + paper)
            }
            delivered.push(new Money(box.value, paper));
            cash = cash - (box.value * paper);
            console.log("Cash : " + cash)
        }
    }

    if (hasDiner()) {
        result.innerHTML = "No tengo dinero";
    } else {
        for (const del of delivered) {
            if (del.amount > 0) {
                result.innerHTML += del.amount + " Billetes de $" + del.value + " <br>";
            }

        }
    }
}

function hasDiner() {
    return cash > 0
}