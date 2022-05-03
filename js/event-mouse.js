
var graph = document.getElementById("graph");
var paper = graph.getContext("2d");
var btnClean = document.getElementById("btnClean");
var moveGraph = graph.getBoundingClientRect();
var x = 250;
var y = 250;
var color = "black";
var bulk = 3;
var boardx = 500;
var boardy = 500;
var drawing = false;

function defbulk(b) {
    bulk = b;
};

function defcolor(c) {
    color = c;
}


btnClean.addEventListener("click", clearDraw);

graph.addEventListener("mousedown", function (e) {
    x = e.x - moveGraph.left;
    y = e.y - moveGraph.top;
    drawing = true;

});

graph.addEventListener("mousemove", function (e) {
    if (drawing === true) {
        draw(x, y, e.x - moveGraph.left, e.y - moveGraph.top)
        x = e.x - moveGraph.left
        y = e.y - moveGraph.top
    }
})

graph.addEventListener("mouseup", function (e) {
    draw(x, y, e.x - moveGraph.left, e.y - moveGraph.top)

    drawing = false
})


function graphKeyBoard(e) {
    var moved = parseInt(txtNumber.value);
    console.log(graph)
    if (e.x <= graph.width && e.y <= graph.height) {
        console.log(e)
    }

}

function draw(xi, yi, fx, fy) {

    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = bulk;
    paper.moveTo(xi, yi);
    paper.lineTo(fx, fy);
    paper.stroke();
    paper.closePath();
}


function clearDraw() {
    paper.clearRect(0, 0, graph.width, graph.height);
}
