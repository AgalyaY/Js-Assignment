let sales = prompt("Enter the sales during this year :)");
if(sales>=0 && sales<=5000){
    console.log(`Commission amount earned by him is : ${sales*2/100}.`);
}
else if(sales>=5001 && sales<=10000){
    console.log(`Commission amount earned by him is : ${sales*5/100}.`);
}
else if(sales>=10001 && sales<=20000){
    console.log(`Commission amount earned by him is : ${sales*7/100}.`);
}
else{
    console.log(`Commission amount earned by him is : ${sales*10/100}.`);
}