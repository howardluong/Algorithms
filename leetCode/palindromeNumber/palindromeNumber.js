1.	//Create a variable to store argument x, and convert it into a string

2.	//Create another variable and have it store the converted string variable,
	//then apply the split, reverse and join method

3.	//Create your final variable and convert the reversed string of numbers into
	//an actual integer.

4.	//Perform a check to see if the final variable is equivalent to argument x.
	//Return true if its a palindrome, otherwise return false.

var isPalindrome = function(x) {
  var intoS = x.toString();		//1
  var rev = intoS.split("").reverse().join("");		//2
  var toNum = Number(rev);		//3
  if(toNum === x){		//4
    return true;
  } return false;
};
