// Higher-order function //
function makeMultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}


const double = makeMultiplier(2);


const triple = makeMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 
