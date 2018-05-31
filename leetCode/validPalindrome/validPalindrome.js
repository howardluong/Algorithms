1.	//Create a variable that contains the regular expression because we would
	//want to use the replace method for any whitespaces

2.	//Create a variable that contains the argument and convert all letters
	//into lower case and chain the replace method, throwing in the
	//whitespace regular expression as an argument and replacing it 
	//with no space. In other words, closing the gap.

3.	//Create a variable that contains the lowerCase variable and
	//apply the split, reverse and join method

4.	//Compare both the reversed element and the lower case element.
	//Return true if they are equal, otherwise return false

var isPalindrome = function(s) {
    var reg = /[\W_]/g;	//1
    var lowerCase = s.toLowerCase().replace(reg, '');	//2
    var reversed = lowerCase.split("").reverse().join("");	//3
    if(lowerCase === reversed){	//4
      return true;
    } return false;
};

isPalindrome('racecar')
