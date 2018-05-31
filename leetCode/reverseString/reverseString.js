//Apply the split method to allow each letter to be a single element, reverse the order
//then join. 

var reverseString = function(s) {
    return s.split("").reverse().join("");
};
