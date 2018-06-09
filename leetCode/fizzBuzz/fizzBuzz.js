1. //Save an empty array variable as a container

2. //Loop through the all numbers prior to argument 'n'

3. //If there are numbers that are multiples of 3 and 5,
   //push 'FizzBuzz' into the array
   
4. //If there is a number that is a multiple of 3,
   //push 'Fizz', into the array
   
5. //If there is a number that is a multiple of 5,
   //push 'Buzz', into the array
   
6. //Lastly, we still have the other elements we 
   //want to push in as well. Push in the rest of,
   the elements and convert them to string, because
   thats what the problem requires.
   
7. //Return the finished array.

var fizzBuzz = function(n) {
    var result = [];   //1
    for(i = 1; i <= n; i++){    //2
      if((i % 3) == 0 && (i % 5) == 0){   //3
        result.push('FizzBuzz');
      } else if(i % 5 == 0){    //4
        result.push('Buzz');
      } else if(i % 3 == 0){    //5
        result.push('Fizz')
      } else {                //6
        result.push(i.toString())
      }
    }
    return result;    //7
};

fizzBuzz(15);
