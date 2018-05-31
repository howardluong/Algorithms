1.  //Create an empty array as our container for the sum of two elements
    //that will equate to the target argument.

2.  //Iterate through the nums array by using a for loop

3.  //One way to do this is to compare the sum of two numbers beside each
    //other. We can do this by having our second iterable variable be
    //equivalent to variable i's index count and adding one to it.

4.  //We perform a check as the iteration is going. Checking if 
    //the sum of nums[i] and nums[j] are equal to target

5.  //if so, push the two elements into the empty array created at the
    //start and return it

6.  //Return undefined if none of the conditions are met

var twoSum = function(nums, target) {
  var result = [];    //1
  
  for(i = 0; i < nums.length; i++){   //2
    for(j = i+1; j < nums.length; j++){   //3
      if(nums[i] + nums[j] === target){   //4
        result.push(i, j);    //5
        return result;
      }
    }
  }
  return undefined;   //6
}


twoSums([2, 7, 11, 15], 9);
