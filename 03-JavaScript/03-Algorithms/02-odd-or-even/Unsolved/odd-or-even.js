// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    //finding the remaider and check if = 0
    if (num%2 === 0) {
        return `even`
    } else {
        return `odd`
    }
};

oddOrEven(5)