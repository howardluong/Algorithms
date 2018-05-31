1.  //Set our counter variable
2.  //Create a while loop
    //As long as variable I is less than the length of the nums array
3.  //We want to perform a check to see if each number in the array
    //is equal to val. If not, increment our counter by one to
    //check if the next number equal to val.
4.  //Mutate the nums array with the splice method by removing,
    //the current number that is equal to val;

var removeElement = function(nums, val){
    var i = 0;  //1
    while(i < nums.length){    //2
        if(nums[i] === val){    //3
            nums.splice(i, 1);  //4
        }
        else {  //3 also
            i++
        }
    }
    return nums.length;
}

removeElement([0,1,2,2,3,0,4,2], 2);
