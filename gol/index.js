const socket =io('http://localhost:3000');
var side=20;
var m = 20;
var n = 20;
var matrix=[];
var side = 30;

function setup(data) {
    setTimeout(()=>{matrix=data.matrix},100)
    
    const elem = document.getElementById("myBtn")
  
    frameRate(32);
    if(matrix.length>2){
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
        if(data.weather=="summer" || data.weather=="spring"){
            fill(50);
            text(data.weather, 10, 10, 70, 80);
            if (matrix[y][x] == 1) {
                fill("#00ff00");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
        else if(data.weather=="winter" || data.weather=="automn"){
            fill(50);
            text(data.weather, 10, 10, 70, 80);
            if (matrix[y][x] == 1) {
                fill("#c1f5cf");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 2) {
                fill("#f5f5cb");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#f7f7f0");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 3) {
                fill("#d4b0ab");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 6  ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
        }
    }

}
function mousePressed(){
    console.log("wsdfghj")
    socket.emit('X',side);

}
    socket.on('matrix',setup)
