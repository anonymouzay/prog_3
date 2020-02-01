const io = require('socket.io-client');
const socket =io();
var side=20;
var m = 20;
var n = 20;
var matrix;

var side = 10;

grassStatistics={
    population:0
}
grasseaterStatistics={
    population:0,
    eatenGrass:0,
    killedByPredator:0,
    killedByRunner:0,
    killedByHunger:0,
    turnedIntoRunner:0
}
predatorStatisics={
    population:0,
    eatenGrasseaters:0,
    killedByRunner:0,
    killedByHunger:0
}
runnerStatistics={
    population:0,
    eatenGrasseaters:0,
    eatenPredators:0,
    runnersWhoUnderstoodTheTruth:0,
}
function setup() {
    matrix = matrixGenerator(60);
    frameRate(32);
    createCanvas(m * side, n * side);
    background('#acacac');
    

}
function draw(){

}
function drawMatrix(matrix) {


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
    socket.on('matrix',drawMatrix)
    console.log(grassStatistics);
    console.log(grasseaterStatistics);
    console.log(predatorStatisics);
    console.log(runnerStatistics);   

}

const retrievedData = () =>{
    socket.emit('retrieveData',{grassStatistics,grasseaterStatistics,predatorStatisics,runnerStatistics})
}

setInterval(retrievedData,6000);