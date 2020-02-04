
const socket =io('http://localhost:3000');
var side=20;
var m = 20;
var n = 20;
var matrix=[];
var side = 30;

function setup(data) {
    setTimeout(()=>{matrix=data},1000)

    console.log(matrix);
  
    frameRate(32);
    if(matrix.length>2){
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

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
    }

}
    socket.on('matrix',setup)
