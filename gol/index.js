var matrix;

var side = 10;
var grassArr = [];
var grasseaterArr = [];
var predatorArr = [];
var runnerArr=[];
var grassStatistics={
    population:0
}
var grasseaterStatistics={
    population:0,
    eatenGrass:0,
    killedByPredator:0,
    killedByRunner:0,
    killedByHunger:0,
    turnedIntoRunner:0
}
var predatorStatisics={
    population:0,
    eatenGrasseaters:0,
    killedByRunner:0,
    killedByHunger:0
}
var runnerStatistics={
    population:0,
    eatenGrasseaters:0,
    eatenPredators:0,
    runnersWhoUnderstoodTheTruth:0,
}
function setup() {
    matrix = matrixGenerator(60);
    frameRate(32);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
                grassStatistics.population++;
            }
            else if (matrix[y][x] == 2) {
                var ge = new Grasseater(x, y, 1);
                grasseaterArr.push(ge);
                grasseaterStatistics.population;
            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x, y, 1);
                predatorArr.push(pr);
                predatorStatisics.population++;
            }

            else if (matrix[y][x] == 6) {
                var ru = new Runner(x, y, 1);
                runnerArr.push(ru);
                runnerStatistics.population++;
            }
        }
    }

}

function draw() {


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
    if (grasseaterArr.length == grassArr.length / 2 || grasseaterArr.length>=grassArr.length ) {
        var newRun = random(grasseaterArr);
        var nx = newRun.x;
        var ny = newRun.y;
        if(newRun){
        for (var i in grasseaterArr) {
            if (nx == grasseaterArr[i].x && ny == grasseaterArr[i].y) {
                grasseaterArr.splice(i, 1);
                grasseaterStatistics.population--;
                grasseaterStatistics.turnedIntoRunner++;
                break;
            }
        }
        newRun = new Runner(nx, ny, 1);
        runnerArr.push(newRun);
        runnerStatistics.population++;
    }
    }
    // if (XmenArr.length == grasseaterArr.length / 2  || XmenArr.length>=grasseaterArr.length) {
    //     var newRun1 = random(XmenArr);
    //     if(newRun1){
    //     var nx1 = newRun1.x;
    //     var ny1 = newRun1.y;
    //     for (var i in XmenArr) {
    //         if (nx1 == XmenArr[i].x && ny1 == XmenArr[i].y) {
    //             XmenArr.splice(i, 1);
    //             break;
    //         }
    //     }

    //     newRun1 = new Runner(nx1, ny1, 1);
    //     runnerArr.push(newRun1);
    // }
    // }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    // for (var i in XmenArr) {
    //     XmenArr = XmenArr.filter(function () {
    //         return true;
    //       });
    //     XmenArr[i].eat();
    // }
    for (var i in runnerArr) {
        runnerArr[i].eat();
    }
    console.log(grassStatistics);
    console.log(grasseaterStatistics);
    console.log(predatorStatisics);
    console.log(runnerStatistics);   

}


//matrix Generator
function matrixGenerator(l) {
    var m = [];
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = random(0, 100);
            // Lcnel matrix tokosayin haraberutyamb
            if (rand <= 40) {
                // Xot
                m[i][j] = 1;
            } else if (rand > 40 && rand <= 55) {
                // Xotaker
                m[i][j] = 2;
            } else if (rand > 55 && rand <= 60) {
                // Gishatich
                m[i][j] = 3;}
            // } else if (rand > 60 && rand <= 75) {
            //     // Nor kerpar 1
            //     m[i][j] = 4;
            // }
             else if (rand > 75 && rand <= 77) {
                // Nor kerpar 2
                m[i][j] = 6;
            }
             else {
                // Datarkutyun
                m[i][j] = 0;
            }
        }
    }
    // Veradarcnel matrix
    return m;
}