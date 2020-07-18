let n = Number(prompt("Enter a number greater than 1 :)"));
console.log(`The prime nuumbers from 2 to ${n} are :`);
for (var i = 2; i <= n; i++) {

    var notPrime = false;
    for (var j = 2; j <= i; j++) {
        if (i%j===0 && i!==j) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(i);
    }
}