//1 - We declare two variables to store the two largest numbers in the array given
//2 - Loop through the numbers given
//3 - If the current number is greater than or equal to the largestNum variable,
// set the secondLargest to the largestNum and have the largestNum set to the current
// number
//4 - Else if the current number is greater than the secondLargest and less than
// the largestNum, then have the second largest set to the current number
//5 - Return your two sums

var sumOfLargestNums = function(nums) {
  var largestNum = 0;
  var secondLargest = 0;  //1
  for(let i = 0; i < nums.length; i++){ //2
    if(nums[i] >= largestNum){
      secondLargest = largestNum;
      largestNum = nums[i];
    } else if(nums[i] > secondLargest && nums[i] < largestNum){
      secondLargest = nums[i]
    }
  }
  return largestNum + secondLargest
};

sumOfLargestNums([26, 5, 12, 16, 10])
