let number = prompt("Enter a number :)",0);
function check(number){
    if(number % 2 == 0){
        result = "Even";
        return result;
    }
    else{
        result = "Odd";
        return result;
    }
}

let resultMsg = check(number);
console.log(`The number entered is ${number} and the number is ${result}.`);
