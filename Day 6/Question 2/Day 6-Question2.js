function printTable(){   
    let num =  document.getElementById("mynum").value;
    let h3= document.getElementById('multiply');
    for(let i=1;i<=10;i++){
        let number = [`${num} x ${i} = ${num*i}`];
        number.forEach(numbers=>{
            h3.innerHTML+=`<li>${numbers}</li>`;
        })
    }
}
