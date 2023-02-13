async function getImage() {
    let oReq = new XMLHttpRequest();
    oReq.open("GET", "https://dog.ceo/api/breeds/image/random");
    oReq.overrideMimeType('application/json');

    oReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.response);
            console.log("log : " + myArr.message);
            console.log(document);
            document.getElementById("image-ramdon").src = myArr.message
        }
    };
    oReq.send();
}