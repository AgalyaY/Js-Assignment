// 1. String methods

    let msg = "Hey, LetsUpgraders:)";

    //length
        console.log(msg.length); //prints the number of characters in the given string.
    //indexOf()
        console.log(msg.indexOf("s")); //returns the position of the 1st occurrence of a specified text in a string & -1 if not found.
    //lastIndexOf()
        console.log(msg.lastIndexOf("s")); //returns the index of the last occurrence of a specified text in a string & -1 if not found.
    //search()
        console.log(msg.search("t")); //searches a string for a specified value and returns the position of the match.
    //slice()
        console.log(msg.slice(5,11)); //extracts a part of a string and returns the extracted part in a new string.
    //substring()
        console.log(msg.substring(5,11)); //substring() is similar to slice() but negative index can't be specified in substring().
    //substr()
        console.log(msg.substr(5,11)) //substr() is similar to slice() but 2nd parameter specifies the length of the extracted part.
    //replace()
        console.log(msg.replace("Hey","Hello")); // replaces a specified value with another value in a string.
    //toUpperCase()
        console.log(msg.toUpperCase()) //All characters in the given string is converted to upper case.
    //toLowerCase()
        console.log(msg.toLowerCase()) //All characters in the given string is converted to lower case.
    //concat()
        let firstName = "  Agalya  ";
        let lastName = "Yeasudass";
        console.log(firstName.concat(lastName)); //joins two or more strings.
    //trim()
        console.log(firstName.trim()); //removes whitespace from both sides of a string.
    //charAt()
        console.log(msg.charAt("7")); //returns the character at a specified index (position) in a string.
    //charCodeAt()
        console.log(msg.charCodeAt("7")); //returns the unicode of the character at a specified index in a string.


// 2. Array methods    

    let colour = ["Blue", "Black", "Pink", "Violet", "Green"];

    //toString()
        console.log(colour.toString()); //converts an array to a string of (comma separated) array values.
    //join()
        console.log(colour.join(" :) ")); //joins all array elements into a string.
    //pop()
        console.log(colour.pop()); //removes the last element from an array.
    //push()
        console.log(colour.push("White")); //Adds new element in the starting of the array and returns the length of the new array formed. 
    
    let name = ["Agalya", "Charu", "Sam", "Prema"];
    
    //shift()
        console.log(name.shift()); //removes the first array element and "shifts" all other elements to a lower index.
    //unshift()
        console.log(name.unshift("Nandy")); //adds a new element to an array (at the beginning), and "unshifts" older elements and returns ne array length.
    //splice()
        console.log(name.splice(1,0,"Sandy","Jaison")); //used to add new items to an array.
    //concat()
        console.log(name.concat(colour)); //creates a new array by merging (concatenating) existing arrays.
    //slice()
        console.log(colour.slice(1)); //slices out a piece of an array into a new array.