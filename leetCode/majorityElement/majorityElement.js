1. //As stated, the majority element is the element that appears more than half of the array length
   //first thing we can do is sort the argument passed in "nums" in the array by applying the default sort method.
2. //Return the argument nums and access the index of nums by applying the parseInt method to it. As the issue
   //states, we want to find the element that appears that occurs more than half the length of the array.
   //We apply the parseInt method to half of nums.length, which in turn will give us the index accessed through
   //bracket notation.
   
var majorityElement = function(nums) {
    nums.sort()								            //1
    return nums[parseInt(nums.length/2)]	//2
};

majorityElement([3, 2, 3])
