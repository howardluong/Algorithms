1.	//We want to loop through the nums array so we have access to each element
2.	//As we iterate through each element, we want to perform a check.
	//This check is to see if the current iterated number is equal to target.
	//If so, return the index of that number
3.	//Otherwise, if the target does not exist in the array provided,
	//we want to push it into the nums array.
4.	//We want to sort the array in ascending order 
5. //Return the index of the number that was pushed into the nums array.

var searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length; i++){	//1
    if(nums[i] === target){		//2
      return nums.indexOf(nums[i])	
    } else {	//3
      nums.push(target);
      let sorted = nums.sort((a, b) => a - b);	//4
      return nums.indexOf(target);	//5
    }
  }
};

searchInsert([1,3,5,6], 3);
