1.	//We want to get rid of zeros in the nums array.
	//This can be done by joining the array into a string,
	//then split it back into an array again but this time,
	//we throw a zero into the split method so each zero,
	//that is found is taken out of the array. We apply
	//the map function to mutate the new array into
	//a new one, giving us an integer based on the length
	//count of each element.

2.	//We sort the newly mutated array by descending order, 
	//putting the highest number at the first index.

3.	//Return the sorted array's first index value.

var findMaxConsecutiveOnes = function(nums) {
  var arr = nums.join('').split('0').map((val) => val.length);	//1
  var sorted = arr.sort((a, b) => b - a)	//2
  return sorted[0]	//3
};

findMaxConsecutiveOnes([1,1,0,1,1,1])
