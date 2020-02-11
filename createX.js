const createX=(matrix)=>{
    X=0;
    Y=matrix.length-1;
    for(;X<matrix[0].length;X++ ){
        for(var i in predatorArr){
            if(predatorArr[i].x==X && predatorArr[i].y==Y){
                predatorArr.splice(i,1);
                predatorStatisics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in grassArr){
            if(grassArr[i].x==X && grassArr[i].y==Y){
                grassArr.splice(i,1);
                grassStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in grasseaterArr){
            if(grasseaterArr[i].x==X && grasseaterArr[i].y==Y){
                grasseaterArr.splice(i,1);
                grasseaterStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in runnerArr){
            if(runnerArr[i].x==X && runnerArr[i].y==Y){
                runnerArr.splice(i,1);
                runnerStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        Y--;
    }
    X=0;
    Y=0;
    for(;Y<matrix[0].length;Y++ ){
        for(var i in predatorArr){
            if(predatorArr[i].x==X && predatorArr[i].y==Y){
                predatorArr.splice(i,1);
                predatorStatisics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in grassArr){
            if(grassArr[i].x==X && grassArr[i].y==Y){
                grassArr.splice(i,1);
                grassStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in grasseaterArr){
            if(grasseaterArr[i].x==X && grasseaterArr[i].y==Y){
                grasseaterArr.splice(i,1);
                grasseaterStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        for(var i in runnerArr){
            if(runnerArr[i].x==X && runnerArr[i].y==Y){
                runnerArr.splice(i,1);
                runnerStatistics.population--;
                matrix[Y][X]=0;
            }  
        }
        X++;
    }
    console.log(matrix)
    return matrix;


}
module.exports=createX;