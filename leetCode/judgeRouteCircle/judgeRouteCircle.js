1.  //Make two variables, one to represent the x axis and one to represent the y axis.

2.  //We iterate through the moves argument using a for loop. 
3.  //Make if and else if statements to check what letters are in the string of moves.
    //Map each letter to a condition of directional movement, eg. 'U' means go up,
4.  //so have the y axis variable move up once. 
5.  //Create an if statement outside of the forloop to see if the end product of
    //both x and y has made a 'full circle', in other words, equal to 0.

var judgeCircle = function(moves) {
    var x = 0;    //1
    var y = 0;
    for(i = 0; i < moves.length; i++){    //2
      if(moves[i] === 'U'){   //3 + 4
        y++;
      }
      else if(moves[i] === 'D'){
        y--;
      }
      else if(moves[i] === 'L'){
        x++;
      }
      else if(moves[i] === 'R'){
        x--;
      }
    }
    if(x === 0 && y === 0){   //5
      return true;
    }
    return false;
};

judgeCircle('UD')
