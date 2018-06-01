1.	//Iterate through each element in nums array
2.	//Nest another forloop so we can compare two elements
3.	//Compare if any element in nums[j] is equivalent to any number in nums[i]
4.	//Return true if the condition is met and return false otherwise

var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){	//1
        for(let j = i + 1; j < nums.length; j++){	//2
            if(nums[i] === nums[j]){	//3
                return true;	//4
            } 
        }
    }
    return false;
};
