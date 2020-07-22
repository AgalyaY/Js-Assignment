function printTable(){
    let num = document.getElementById("mynum").value;
    for (let i = 1 ; i < 11 ; i++) {
        var result= '';       
        result += num + "x" + i + "=" + num*i;
    }
    document.getElementById("multiply").innerHTML =result;
}
