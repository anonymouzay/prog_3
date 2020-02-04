const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const random = require('./gol/random')
 
const Grass = require('./gol/grass.js');
const Grasseater = require('./gol/grasseater.js');
const Predator = require('./gol/predator.js');
const Runner = require('./gol/runner.js');



grassArr = [];
grasseaterArr = [];
predatorArr = [];
runnerArr = []; 

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

matrix=[];

function drawServer(){
    matrix = matrixGenerator(20)
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
  io.sockets.emit('matrix',matrix);
}
function matrixGenerator(l) {
   var m = [];
   for (var i = 0; i < l; i++) {
       m[i] = [];
       for (var j = 0; j < l; j++) {
           // Stexcel random tiv
           var rand = random(100);
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
 
   for (var y = 0; y < m.length; ++y) {
      for (var x = 0; x < m[y].length; ++x) {
          if (m[y][x] == 1) {
              var gr = new Grass(x, y, 1);
              grassArr.push(gr);
              grassStatistics.population++;
          }
          else if (m[y][x] == 2) {
              var ge = new Grasseater(x, y, 1);
              grasseaterArr.push(ge);
              grasseaterStatistics.population;
          }
          else if (m[y][x] == 3) {
              var pr = new Predator(x, y, 1);
              predatorArr.push(pr);
              predatorStatisics.population++;
          }

          else if (m[y][x] == 6) {
              var ru = new Runner(x, y, 1);
              runnerArr.push(ru);
              runnerStatistics.population++;
          }
      }
  }
   // Veradarcnel matrix
   return m;
}
setInterval(drawServer,1000);


app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('./gol/index.html');
});

io.on('connection', function(socket){
   console.log('The game has started')
//    socket.emit('createMatrix',);
   socket.on('retrieveData',(props)=>{
      var file  = "stats.json";
      var myJSON = JSON.stringify(props);
      fs.appendFileSync(file, myJSON);
   
   });
   socket.on('disconnect', function () {
      console.log('The game has ended');
    });
});



server.listen(3000);
 