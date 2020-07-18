let sales = Number(prompt("Enter the sales during this year :)"));
if(sales>=0 && sales<=5000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*2/100)}.`);
}
else if(sales>=5001 && sales<=10000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*5/100)}.`);
}
else if(sales>=10001 && sales<=20000){
    console.log(`Total commission amount earned by him is : ${sales+(sales*7/100)}.`);
}
else{
    console.log(`Total commission amount earned by him is : ${sales+(sales*10/100)}.`);
}
