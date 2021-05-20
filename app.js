//Program to convert fahrenheit to celcius
    function convertFahrToCelsius(C) {
    let F;
    if (isNaN(C)) {
        return `${C} is not a valid number but a/an ${Object.prototype.toString.call(C)}.`;
        return `${C} is not a valid number but a/an ${Oject.prototype.toString.call (C)}.`;
    };
    F = (C - 32) / 1.8;
    var result = F;
    result = result.toFixed(4)
    return result;
        console.log(result);
}
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius(({temp:0})));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(0));

// A function named "checkYuGiOh


function checkYuGiOh(n){
    var arr = [];
    if (isNaN(n)) {
        return `${n} is not a valid number.`;
    };
    for (let i = 1; i <= n; i++) {
        let lres = [];
        if (i % 2 === 0) {
            lres.push('yu');
        }
        if (i % 3 === 0) {
            lres.push('gi');
        }
        if (i % 5 === 0) {
            lres.push('oh');
        }
       if(lres.length > 0)
           arr.push(lres.join("-"));
        else
              arr.push(i);
    }
    return arr;
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
 
