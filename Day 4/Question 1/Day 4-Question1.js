for(let i=1;i<=100;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(`For the number ${i}, the result is : fizzbuzz.`);
    }
    else if(i%3 == 0){
        console.log(`For the number ${i}, the result is : fizz.`);
    }
    else if(i%5 == 0){
        console.log(`For the number ${i}, the result is : buzz.`);
    }
}