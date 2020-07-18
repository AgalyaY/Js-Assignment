let mark = prompt("Enter your mark :)",0); 

//using conditional statements

    if(mark >= 91 && mark <= 100){
        console.log(`Your mark is ${mark} and the grade is "O" :)`);
    }
    else if(mark >= 81 && mark <= 90){
        console.log(`Your mark is ${mark} and the grade is "A+".`);
    }
    else if(mark >= 71 && mark <= 80){
        console.log(`Your mark is ${mark} and the grade is "A".`);
    }
    else if(mark >= 61 && mark <= 70){
        console.log(`Your mark is ${mark} and the grade is "B+".`);
    }
    else if(mark >= 51 && mark <= 60){
        console.log(`Your mark is ${mark} and the grade is "B".`);
    }
    else{
        console.log(`Sorry, Your mark is ${mark} and the grade is "F"(Fail).Please work hard :(`);
    }

//using switch

    switch (true) {
        case(mark >= 91 && mark <= 100):
            console.log(`Your mark is ${mark} and the grade is "O" :)`);        
            break;
        case(mark >= 81 && mark <= 90):
            console.log(`Your mark is ${mark} and the grade is "A+".`);        
            break;
        case(mark >= 71 && mark <= 80):
            console.log(`Your mark is ${mark} and the grade is "A".`);        
            break;        
        case(mark >= 61 && mark <= 70):
            console.log(`Your mark is ${mark} and the grade is "B+".`);        
            break;
        case(mark >= 51 && mark <= 60):
            console.log(`Your mark is ${mark} and the grade is "B".`);        
            break;
        default:
            console.log(`Sorry, Your mark is ${mark} and the grade is "F"(Fail).Please work hard :(`);
            break;
}
 
//using ternary operator

    let grade =  mark >= 91 && mark <= 100 ? `Your mark is ${mark} and the grade is "O" :)` : 
                 mark >= 81 && mark <= 90 ? `Your mark is ${mark} and the grade is "A+"` : 
                 mark >= 71 && mark <= 80 ? `Your mark is ${mark} and the grade is "A"` : 
                 mark >= 61 && mark <= 70 ? `Your mark is ${mark} and the grade is "B+"` : 
                 mark >= 51 && mark <= 60 ? `Your mark is ${mark} and the grade is "B"` : 
                 `Sorry, Your mark is ${mark} and the grade is "F"(Fail).Please work hard :(`;
    console.log(grade);

    