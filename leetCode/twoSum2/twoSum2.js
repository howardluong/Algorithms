1.	//We want to iterate through each element and compare them. A way to access the numbers are to set
	//variables i and j as the iterable containers and using a while loop to iterate through each item.
	//So our condition in the while loop, is to see if numbers[i] and numbers[j] is not equal to the target.

2.	//If this condition passes, we create another condition with an if statement, checking if the sum of 
	//numbers[i] and numbers[j] are less than target. 
3.	//If so, we increment i and add it with numbers[j]
4.	//Otherwise if the sum of numbers are greater than the target, decrement j until the sum of both 
	//numbers are equal to target.
	//Once the sum of the numbers are equal to target, return the indexes of smaller number first with
	//the second to follow. Because zero index is not allowed in the solution, add one to the index
	//of both elements in the array.

var twoSum = function(numbers, target) {
  var i = 0;
  var j = numbers.length - 1;
  
  while(numbers[i] + numbers[j] !== target){  	//1
    if(numbers[i] + numbers[j] < target){  		//2
      i++;			//3
    } else {
      j--;			//4
    }
  }
  return [i + 1, j + 1];
};
