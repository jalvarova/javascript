const rootFile = "../img/"

const pakiman = new Map();
pakiman.set("cauchin", "cow.png")
pakiman.set("pokacho", "chicken.png")
pakiman.set("tocinauro", "pig.png")

class Pakiman {
    constructor(name, type, attack, life) {
        this.image = new Image();

        this.name = name
        this.type = type
        this.attack = attack
        this.life = life

        this.image.src = rootFile + pakiman.get(this.name);
        this.image.id = "action"
    }

    talk() {
        alert(this.name)
    }

    show() {
        console.log(this.name)
        document.getElementById("action").innerHTML = alert(
            "Name: " + this.name + "\n" +
            "Tipo: " + this.type + "\n" +
            "Ataque: " + this.attack + "\n" +
            "Vida: " + this.life + "\n"
        )
    }

    showImage() {
        document.body.appendChild(this.image)
    }
}

var pokacho = new Pakiman("pokacho", "electro", 200, 100);
var cauchin = new Pakiman("cauchin", "tierra", 200, 100);
var tocinauro = new Pakiman("tocinauro", "fuego", 200, 100);

pokacho.showImage();
tocinauro.showImage();
cauchin.showImage();

cauchin.image.addEventListener("click", cauchin.show)
tocinauro.image.addEventListener("click", tocinauro.show)
