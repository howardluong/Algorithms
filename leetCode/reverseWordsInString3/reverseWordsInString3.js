1.	//Assign a new variable and split the argument 's' into an array.
	//We add a space into the split array method to seperate the elements
	//by words instead of letters.

2.	//Iterate through each word.

3.	//Now that we seperated each word as elements, we can safely reverse the 
	//order of each letter per word that gets looped through by applying
	//the split, reverse and join method.

4.	//Return the reversed words as a joined sentence once again.



var reverseWords = function(s) {
    var arr = s.split(" ");		//1
    for(i = 0; i < arr.length; i++){		//2
      arr[i] = arr[i].split("").reverse().join("");		//3
    }
    return arr.join(" ")	//4
};
