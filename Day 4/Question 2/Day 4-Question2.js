let student = {
    name:"Helsinki",
    age:24,
    projects : {
        diceGame : "Two player dice game with Javascript.",
    },
}

//destructuring
 
const {name, age, projects:{diceGame}} = student;
console.log(name);
console.log(age);
console.log(diceGame);