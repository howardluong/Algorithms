1.	//Apply the splice with the nums array. The first
	//parameter of splice takes in the index of where
	//to begin the splice. The second parameter takes
	//in the index of where to end. Finally, the third
	//parameter is what you want to insert into the array.
	//We pretty much deleted the whole array and gave it
	//a new set of unique elements, which is what the
	//spread operator with the new Set method would do.

var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ... new Set(nums)); //1
    return nums.length
};
