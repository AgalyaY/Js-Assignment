//var ----it has the scope of the function.
    //String
    var name = "Agalya";
    //Number
    var age = 20;
    //Boolean
    var ismale = false;
    //Null
    var a = null;
    //Array
    var favColor = ['blue','black','pink']
    //Objects
    var friend = {
        name:"Charu",
        passion:"coding",
    }
    console.log({name,age,ismale,a});
    console.log({favColor,friend})

//let ----it has the scope of the block.
    {
        let name = "Sam";
        console.log(name);//prints the name inside the block
    }
    console.log(name);//prints the name which has scope outside the block

//const ----its value cannot be changed or it can't be modified.
    const dobYear = 2000;
    console.log(dobYear);
    dobYear = 2001;
    console.log(dobYear); //TypeError: Assignment to constant variable.