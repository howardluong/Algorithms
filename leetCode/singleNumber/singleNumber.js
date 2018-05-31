1.	//We sort the array nums in ascending order.

2.	//Iterate through the newly sorted nums array.
	//We can compare 2 numbers 
	//at a time as we iterate.

3.	//Compare the first pair of numbers.
	//If they do match, continue the iteration of elements.
	//if they dont match, return that number. 


var singleNumber = function(nums) {
    nums = nums.sort(function(a, b){	//1
        return a - b;
    })
  for(i = 0; i < nums.length; i+=2){	//2
    if(nums[i] != nums[i + 1]){			//3
      return nums[i]					
    }
  }
};

singleNumber([4,1,2,1,2]);
