//Problem - Find the two largest numbers within the array and return the sum of the two numbers. 

//1 - We declare two variables to store the two largest numbers in the array given

//2 - We can set our iterator to begin at index of 2, because we will be setting our
// first two elements to the elements at index 0 and 1;

//3 - Now that we are iterating through the array, we make an if statement
// to check if the current number being iterated through is greater than the largestNum

//4 - To check for the secondLargest, we have to see if the current number is greater than
// the secondLargest and less than the largestNum, this way, we can get the
// we will always have a number that is greater than the rest but smaller than
// the largest number, which results in getting us the second largest number in the array.

//5 - Return the sum of both numbers

var sumOfLargestNums = function(nums) {
  var largestNum, secondLargest;  //1
  for(let i = 2; i < nums.length; i++){ //2
    largestNum = nums[0];
    secondLargest = nums[1];
    if(nums[i] > largestNum){ //3
      largestNum = nums[i]
    } else if(nums[i] > secondLargest && nums[i] < largestNum){ //4
      secondLargest = nums[i]
    }
  }
  return largestNum + secondLargest;  //5
};

sumOfLargestNums([16, 5, 8, 10, 12])
