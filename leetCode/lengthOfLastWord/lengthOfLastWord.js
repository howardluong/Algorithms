1.	//First we have to remove the white spaces of the string
	//then convert it into an array

2.	//Return the arr and access the length of the last element 
	//using bracket notation

var lengthOfLastWord = function(s) {
    var arr = s.trim().split(" "); //1
    return arr[arr.length -1].length; //2
};
