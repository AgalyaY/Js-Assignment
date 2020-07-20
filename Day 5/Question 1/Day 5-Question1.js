let num = Number(prompt("Enter a number :)"),0);
let arr = [];
for(let i=1;i<=num;i++){
    arr.push(i);
}
let filterArray = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(`Array of cubes of the filtered array is : ${filterArray}`);